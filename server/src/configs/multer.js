import multer from "multer";
import {CloudinaryStorage} from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder: 'NextGenAIStudio',
        allowed_formats: ['jpg', 'jpeg', 'png', 'webp' ],
        transformation: [{width: 1024, height: 1024, crop: "limit"}],
    }
});

const upload = multer({ storage });

export default upload;