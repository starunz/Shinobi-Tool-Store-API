import { Router } from 'express';

import authRouter from './authRouter.js';
import productsRouter from './productsRouter.js';
import buyerRouter from './buyerRouter.js';

const router = Router();

router.use(authRouter);
router.use(productsRouter);
router.use(buyerRouter);

export default router;