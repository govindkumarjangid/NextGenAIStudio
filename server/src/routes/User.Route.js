import Router from 'express';
import { protect } from '../middlewares/auth.middleware.js';
import {
    deductCredits,
    loginUser,
    registerUser,
    userData
} from '../controllers/User.Controller.js';

const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/handlecredit', protect, deductCredits);
userRouter.get('/data', protect, userData);

export default userRouter;