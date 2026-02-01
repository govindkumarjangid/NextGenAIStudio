import Caption from "../models/caption.model";
import axios from "axios";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

export const uploadImage = async (req, res) => {
    try {
        if (!req.file || !req.file.path)
            return res.status(400).json({ success: false, message: "Image file is required." });

        const imageUrl = req.file.path;

        const newImage = await Caption.create({
            imageUrl,
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
        const { imageUrl, id } = req.body;
        if (!imageUrl)
            return res.status(400).json({ success: false, message: "Image URL is required." });

        const imageRes = await axios.get(imageUrl, {
            responseType: "arraybuffer",
        });

        const base64Image = Buffer.from(imageRes.data).toString("base64");

        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
        });

        const result = await model.generateContent([
            {
                inlineData: {
                    data: base64Image,
                    mimeType: "image/jpeg",
                },
            },
            "Generate a short creative caption for this image.",
        ]);

        const caption = result.response.text();

        if (id) await Caption.findByIdAndUpdate(id, { caption });

        res.status(200).json({ success: true, caption });

    } catch (error) {
        console.error("Caption Generation Error:", error);
        res.status(500).json({ success: false, message: "Caption generation failed." });
    }
}