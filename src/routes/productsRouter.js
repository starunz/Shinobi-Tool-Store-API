import { Router } from 'express';
import { getProducts, getProduct } from '../controllers/productsController.js';

const productsRouter = Router();

productsRouter.get('/', getProducts)
productsRouter.get('/product/:productId', getProduct)

export default productsRouter;