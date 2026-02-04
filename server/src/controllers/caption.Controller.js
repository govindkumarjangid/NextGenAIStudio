import Caption from "../models/caption.model.js";
import axios from "axios";
import { uploadToCloudinary } from "../configs/multer.js";
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
    const { imageUrl, id, style } = req.body;

    if (!imageUrl)
      return res.status(400).json({ success: false, message: "Image URL is required." });

    if (!id || !style)
      return res.status(400).json({ success: false, message: "ID and style are required." });

    // Fetch image from URL
    const imageRes = await axios.get(imageUrl, {
      responseType: "arraybuffer",
    });

    const base64Image = Buffer.from(imageRes.data).toString("base64");

    // Initialize Gemini AI
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    // Use gemini-1.5-pro or gemini-1.5-flash (supports vision)
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
    });

    // Generate caption with image and text prompt
    const result = await model.generateContent([
      {
        inlineData: {
          data: base64Image,
          mimeType: "image/jpeg",
        },
      },
      `Write a short ${style} Instagram caption for this image. Make it unique, engaging, and emoji-friendly. Return only one caption.`,
    ]);

    const caption = result.response.text();

    console.log("Generated Caption:", caption);

    // Update caption in database
    if (id) await Caption.findByIdAndUpdate(id, { caption });

    res.status(200).json({ success: true, caption });
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

    const captions = await Caption.find({ userId: _id }).select("imageUrl caption createdAt");

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