import { Router } from 'express';
import productsRouter from './productsRouter.js';
//importar as rotas aqui
const router = Router();

router.use(productsRouter);

export default router;