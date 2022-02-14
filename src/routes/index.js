import { Router } from 'express';

import authRouter from './authRouter.js';
import productsRouter from './productsRouter.js';
import buyerRouter from './buyerRouter.js';
import clientRouter from './clientRouter.js';

const router = Router();

router.use(authRouter);
router.use(productsRouter);
router.use(buyerRouter);
router.use(clientRouter)

export default router;