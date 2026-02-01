import { Router } from "express";
import { genrateCaption } from "../controllers/caption.Controller";
import { protect } from "../middleware/auth.Middleware.js";
import upload from "../configs/multer.js";

const captionRouter = Router();

captionRouter.post("/caption/upload", upload.single("image"), protect, uploadImage);
captionRouter.post("/caption/generate-caption",protect, genrateCaption );

export default captionRouter;