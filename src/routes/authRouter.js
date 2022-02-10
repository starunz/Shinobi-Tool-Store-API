import { Router } from 'express';

import { signUp } from '../controllers/authController.js';
import { validateSignUp } from '../middlewares/validateSignUp.js';

const authRouter = Router();

authRouter.post('/sign-up', validateSignUp, signUp);

export default authRouter;