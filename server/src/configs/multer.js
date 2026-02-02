import multer from "multer";
import cloudinary from "./cloudinary.js";

const storage = multer.memoryStorage();

const upload = multer({ storage });

export const uploadToCloudinary = (buffer, options = {}) =>
    new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: "NextGenAIStudio/captions",
                allowed_formats: ["jpg", "jpeg", "png", "webp"],
                format: "webp",
                ...options,
            },
            (error, result) => {
                if (error) return reject(error);
                return resolve(result);
            }
        );

        uploadStream.end(buffer);
    });

export default upload;