import Router from 'express';
import { generateImage } from '../controllers/ImageController.js';

const imageRoute = Router();

imageRoute.post('/generate-image', generateImage);

export default imageRoute;