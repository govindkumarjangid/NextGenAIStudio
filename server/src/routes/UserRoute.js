import Router from 'express';
import { protect } from '../middlewares/auth.js';
import {
    deductCredits,
    loginUser,
    registerUser
} from '../controllers/UserController.js';

const userRouter = Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.post('/handlecredit', protect, deductCredits);

export default userRouter;