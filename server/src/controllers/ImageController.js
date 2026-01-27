import Image from "../models/Image.js";
import { API_URL } from "../configs/huggingface.js";
import dotenv from "dotenv";

dotenv.config();

export const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;
    console.log(prompt)
    if (!prompt)
      return res.status(400).json({ error: "Prompt is required" });

    console.log("Generating image for:", prompt);

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: prompt,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.log("HF Error Response:", errorText);
      return res.status(500).json({ error: "HuggingFace API Error", details: errorText, });
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const base64Image = `data:image/png;base64,${buffer.toString("base64")}`;

    console.log("Image generated successfully!");
    console.log(base64Image)


    // const newImage = new Image({ prompt, imageUrl: base64Image });
    // await newImage.save();


    // return res.status(200).json({
    //   success: true,
    //   prompt,
    //   image: base64Image,
    // });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      error: "Image generation failed",
      message: error.message,
    });
  }
};
