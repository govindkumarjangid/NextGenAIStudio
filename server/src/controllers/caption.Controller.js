import Caption from "../models/caption.model.js";
import axios from "axios";
import { uploadToCloudinary } from "../configs/multer.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

export const uploadImage = async (req, res) => {
    try {
        const { _id } = req.user;
        if (!req.file) {
            return res.status(400).json({ success: false, message: "Image file is required." });
        }
        const result = await uploadToCloudinary(req.file.buffer);
        const imageUrl = result?.secure_url;
        if (!imageUrl) {
            return res.status(400).json({ success: false, message: "Failed to get image URL from Cloudinary." });
        }
        const newImage = await Caption.create({
            userId: _id,
            imageUrl: imageUrl,
            caption: "",
        });
        res.status(200).json({
            success: true,
            message: "Image uploaded successfully",
            imageUrl,
            id: newImage._id,
        });

    } catch (error) {
        console.error("Image Upload Error:", error);
        res.status(500).json({ success: false, message: "Image upload failed." });
    }
}

export const genrateCaption = async (req, res) => {
  try {
    const { imageUrl, id, style, platform } = req.body;

    if (!imageUrl)
      return res.status(400).json({ success: false, message: "Image URL is required." });

    if (!id || !style)
      return res.status(400).json({ success: false, message: "ID and style are required." });

    const imageRes = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const mimeType = imageRes.headers['content-type'] || "image/jpeg";
    const base64Image = Buffer.from(imageRes.data).toString("base64");

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "models/gemini-2.5-flash" });

    const normalizedPlatform = (platform || "instagram").toString().trim().toLowerCase();

    const hashtagLimits = {
      instagram: 3,
      facebook: 2,
      twitter: 2,
      youtube: 2,
    };

    const platformRules = {
      instagram:
        "Keep it under 2 sentences. Focus on vibe and mood. Use 3 aesthetic emojis.",
      facebook:
        "Keep it under 3 sentences. Friendly, conversational tone. Include 1 question.",
      twitter:
        "Keep it under 240 characters. Punchy and witty. Use at most 1 emoji.",
      youtube:
        "Keep it under 2 sentences. Add a short hook.",
    };

    const hashtagCount = hashtagLimits[normalizedPlatform] ?? 1;
    const rules = platformRules[normalizedPlatform] || "Keep it short and clear. Match the audience of the platform.";

    const prompt = `Look at this image and generate a caption for the platform "${normalizedPlatform}".\nStyle: ${style}.\nRules: ${rules}\nHashtags: include exactly ${hashtagCount} hashtags in the caption and list them in hashtags[].\nReturn ONLY valid JSON with this schema: { "platform": string, "style": string, "caption": string, "hashtags": string[], "emojis": string[] }.`;

    const result = await model.generateContent([
      {
        inlineData: {
          data: base64Image,
          mimeType: mimeType,
        },
      },
      prompt,
    ]);

    const rawText = result.response.text().trim();
    let parsedOutput = null;
    try {
      const jsonMatch = rawText.match(/\{[\s\S]*\}/);
      parsedOutput = jsonMatch ? JSON.parse(jsonMatch[0]) : null;
    } catch (parseError) {
      parsedOutput = null;
    }

    const ensureHashtagPrefix = (value) => value.startsWith("#") ? value : `#${value}`;
    const uniqueHashtags = (list) => {
      const seen = new Set();
      return list.filter((tag) => {
        const key = tag.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    };

    const rawHashtags = Array.isArray(parsedOutput?.hashtags) ? parsedOutput.hashtags : [];
    const normalizedHashtags = uniqueHashtags(
      rawHashtags
        .map((tag) => String(tag).trim())
        .filter((tag) => tag.length > 0)
        .map(ensureHashtagPrefix)
    ).slice(0, hashtagCount);

    let captionText = parsedOutput?.caption || rawText;
    if (normalizedHashtags.length > 0) {
      const hasTagInCaption = normalizedHashtags.some((tag) => captionText.includes(tag));
      if (!hasTagInCaption) {
        captionText = `${captionText} ${normalizedHashtags.join(" ")}`.trim();
      }
    }

    const output = parsedOutput || {
      platform: normalizedPlatform,
      style,
      caption: captionText,
      hashtags: normalizedHashtags,
      emojis: [],
    };

    output.hashtags = normalizedHashtags;
    output.caption = captionText;

    if (id) await Caption.findByIdAndUpdate(
      id,
      { caption: captionText, platform: normalizedPlatform, style, output },
      { new: true }
    );

    res.status(200).json({ success: true, caption: captionText, output });
  } catch (error) {
    console.error("Caption Generation Error:", error.message);
    res.status(500).json({
      success: false,
      message: "Caption generation failed.",
      error: error.message,
    });
  }
};

export const getUserCaptions = async (req, res) => {
  try {
    const { _id } = req.user;

    if (!_id) {
      return res.status(401).json({ success: false, message: "User not authenticated." });
    }

    const captions = await Caption.find({ userId: _id }).select(
      "imageUrl caption platform style output createdAt"
    );

    if (!captions || captions.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No captions found.",
        captions: []
      });
    }

    res.status(200).json({
      success: true,
      message: "User captions retrieved successfully.",
      captions
    });

  } catch (error) {
    console.error("Get User Captions Error:", error);
    res.status(500).json({ success: false, message: "Failed to fetch captions." });
  }
};
