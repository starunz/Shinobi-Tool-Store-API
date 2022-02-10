import { Router } from 'express';
import { getProducts } from '../controllers/productsController.js';

const productsRouter = Router();

productsRouter.get('/', getProducts)

export default productsRouter;