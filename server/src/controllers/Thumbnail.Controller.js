import { GenrateContentConfig, HarmCategory, HarmBlockThreshold } from "@google/genai";
import { GoogleGenAI } from "@google/generative-ai";
import Thumbnail from "../models/thumbnail.model.js";
import dotenv from 'dotenv';
import Path from 'path';
import fs from 'fs';
import {uploadToCloudinary} from "../configs/multer.js";
dotenv.config();

const stylePrompts = {
    'Bold & Graphic': 'eye-catching thumbnail, bold typography, vibrant colors, expressive facial reaction, dramatic lighting, high contrast, click-worthy composition, professional style',
    'Tech/Futuristic': 'futuristic thumbnail, sleek modern design, digital UI elements, glowing accents, holographic effects, cyber-tech aesthetic, sharp lighting, high-tech atmosphere',
    'Minimalist': 'minimalist thumbnail, clean layout, simple shapes, limited color palette, plenty of negative space, modern flat design, clear focal point',
    'Photorealistic': 'photorealistic thumbnail, ultra-realistic lighting, natural skin tones, candid moment, DSLR-style photography, lifestyle realism, shallow depth of field',
    'Illustrated': 'illustrated thumbnail, custom digital illustration, stylized characters, bold outlines, vibrant colors, creative cartoon or vector art style',
};

const colorSchemeDescriptions = {
    vibrant: 'vibrant and energetic colors, high saturation, bold contrasts, eye-catching palette',
    sunset: 'warm sunset tones, orange pink and purple hues, soft gradients, cinematic glow',
    forest: 'natural green tones, earthy colors, calm and organic palette, fresh atmosphere'    ,
    neon: 'neon glow effects, electric blues and pinks, cyberpunk lighting, high contrast glow',
    purple: 'purple-dominant color palette, magenta and violet tones, modern and stylish mood',
    monochrome: 'black and white color scheme, high contrast, dramatic lighting, timeless aesthetic',
    ocean: 'cool blue and teal tones, aquatic color palette, fresh and clean atmosphere',
    pastel: 'soft pastel colors, low saturation, gentle tones, calm and friendly aesthetic',
};


export const generateThumbnail = async (req, res) => {
    try {
        const { _id } = req.user;
        const { title, prompt: user_prompt, style, aspect_ratio, color_scheme, text_overlay } = req.body;

        const thumbnail = await Thumbnail({
            user: _id,
            title,
            prompt_used: user_prompt,
            style,
            aspect_ratio,
            color_scheme,
            text_overlay,
            isGenrating: true
        });


        const generationConfig  = {
            maxOutputTokens: 32768,
            temperature: 1,
            topP: 0.95,
            responseModalities: ["image"],
            imageConfig: {
                aspectRatios: aspect_ratio || '16:9',
                imageSize: '1k'
            },
            safetySettings: [
                { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.OFF },
                { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.OFF },
                { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.OFF },
                { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.OFF },
            ]
        }

        let prompt = `Create a thumbnail. Style: ${stylePrompts[style] || style}. Title text to include: "${title}".`;

        if (color_scheme)   prompt += ` Use a ${colorSchemeDescriptions[color_scheme]} color scheme.`;

        if (user_prompt)  prompt += ` Additional details: ${user_prompt}.`;

        prompt += ` The thumbnail should be ${aspect_ratio}, visually stunning, and designed to maximize click-through rate. Make it bold, professional, and impossible to ignore.`;

        const model = "models/gemini-3-pro-preview";
        const genAI = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY});
        const response = await genAI.generateContent({
            model,
            contents: [prompt],
            config: new GenrateContentConfig(generationConfig)
        });

        if(!response?.candidates?.[0]?.content?.parts) {
         throw new Error("Unexpected response");
        }

        const parts = response.candidates[0].content.parts;
        let finalBuffer = Buffer || null;

        for (const part of parts) {
            if(part.inlineData){
                finalBuffer = Buffer.from(part.inlineData, 'base64');
            }
        }

        const filename = `thumbnail_${Date.now()}.webp`;
        const filePath = Path.join('images', filename);

         // create the images directory if it doesn't exist
        fs.mkdirSync('images', { recursive: true });

         // save the image buffer to a file
        fs.writeFileSync(filePath, finalBuffer);

        const imageUrl = await uploadToCloudinary(filePath);

        thumbnail.imageUrl = imageUrl;
        thumbnail.isGenrating = false;
        await thumbnail.save();

        res.status(200).json({ success: true, thumbnail });

         // delete the local file after uploading
        fs.unlinkSync(filePath);

    } catch (error) {
        console.error("Error generating thumbnail:", error)
        res.status(500).json({ success: false, message: "Failed to generate thumbnail" })
    }
}