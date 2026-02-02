import { Router } from "express";
import { genrateCaption, getUserCaptions, uploadImage } from "../controllers/caption.Controller.js";
import upload from "../configs/multer.js";
import { protect } from "../middlewares/auth.middleware.js";

const captionRouter = Router();

captionRouter.post("/upload", upload.single("image"), protect, uploadImage);
captionRouter.post("/generate-caption", protect, genrateCaption );
captionRouter.get("/user-captions", protect, getUserCaptions);

export default captionRouter;