import Image from "../models/Image.model.js";

export const generateImage = async (req, res) => {
  try {

    const { prompt } = req.body;
    const { _id } = req.user;

    if (!prompt || prompt.trim() === "")
      return res.status(400).json({ success: false, message: "Prompt is required" });

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?seed=${Date.now()}&nologo=true`;

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

export const getUserGenratedImages = async () => {
  try {
    const { _id } = req.user;
    if (!_id) res.status(400).json({ success: false, message: "User Not found" });

    const userImages = await Image.find({ userId: _id });
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
    const defaultImages = await Image.find({ userId: null });
    res.status(200).json({
      success: true,
      message: "Default images fetched successfully",
      images: defaultImages
    });
  } catch (error) {
    console.log("Error fetching default images:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
