import Image from "../models/Image.model.js";

export const generateImage = async (req, res) => {
  try {

    // const {prompt} = req.body;

    // if(!prompt || prompt.trim() === "") {
    //   return  res.status(400).json({
    //     success: false,
    //     message: "Prompt is required",
    //   });
    // }

    const prompt =
      "A futuristic cityscape with flying cars and neon lights, in the style of cyberpunk art";

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
      prompt
    )}`;

    const newImage = await Image.create({
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
