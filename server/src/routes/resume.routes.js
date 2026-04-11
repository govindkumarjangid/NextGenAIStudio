import express from 'express';
import { createResume, getResumes } from '../controllers/resume.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const resumeRouter = express.Router();

resumeRouter.post('/create', protect, createResume);
resumeRouter.get('/get-resumes', protect, getResumes);



export default resumeRouter;