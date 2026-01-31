import Router from 'express';
import { generateImage, getUserGenratedImages, getDefaultImages } from '../controllers/Image.Controller.js';
import {protect} from '../middlewares/auth.middleware.js'

const imageRoute = Router();

imageRoute.post('/generate-image', protect, generateImage);
imageRoute.get('/get-images', protect, getUserGenratedImages);
imageRoute.get('/default-images', getDefaultImages);

export default imageRoute;