import Router from 'express';
import { generateImage } from '../controllers/Image.Controller.js';

const imageRoute = Router();

imageRoute.post('/generate-image', generateImage);

export default imageRoute;