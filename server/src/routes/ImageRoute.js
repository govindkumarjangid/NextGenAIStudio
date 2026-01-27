import Router from 'express';
import { generateImage } from '../controllers/ImageController.js';

const ImageRoute = Router();

ImageRoute.post('/genrate-image', generateImage);

export default ImageRoute;