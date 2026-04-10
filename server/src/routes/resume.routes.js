import express from 'express';
import { createResume } from '../controllers/resume.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/', protect, createResume);

export default router;