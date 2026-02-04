import Image from "../models/Image.model.js";
import dotenv from "dotenv";
import Bytez from "bytez.js"
dotenv.config();

export const generateImage = async (req, res) => {
  try {

    const { prompt } = req.body;
    const { _id } = req.user;

    if (!prompt || prompt.trim() === "")
      return res.status(400).json({ success: false, message: "Prompt is required" });

    const key = process.env.BYTEZ_API_KEY;
    const sdk = new Bytez(key);

    const model = sdk.model("google/imagen-4.0-ultra-generate-001")

    const { error, output } = await model.run(prompt);

    if (error)
      return res.status(500).json({ success: false, message: "Error generating image", });

    const imageUrl = output;

    const newImage = await Image.create({
      userId: _id,
      prompt,
      imageUrl,
    });

    res.status(200).json({
      success: true,
      message: "Image generated successfully",
      imageUrl: newImage.imageUrl,
    });
  } catch (error) {
    console.log("Error generating image:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getUserGenratedImages = async (req, res) => {
  try {
    const { _id } = req.user;
    if (!_id) return res.status(400).json({ success: false, message: "User Not found" });

    const userImages = await Image.find({ userId: _id }).sort({ createdAt: -1 });
    if (!userImages) return res.status(400).json({ success: false, message: "images Not found" })

    res.status(200).json({
      success: true,
      message: "Image fetched successfully",
      images: userImages
    });
  } catch (error) {
    console.log("Error generating image:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}

export const getDefaultImages = async (req, res) => {
  try {
    const defaultImages = await Image.find({
      $or: [{ userId: null }, { userId: { $exists: false } }]
    }).sort({ createdAt: -1 });

    console.log("Default images found:", defaultImages.length);

    res.status(200).json({
      success: true,
      message: "Default images fetched successfully",
      images: defaultImages,
      count: defaultImages.length
    });
  } catch (error) {
    console.log("Error fetching default images:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}