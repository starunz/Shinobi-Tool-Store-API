import { Router } from 'express';
import { getProducts, getProduct, addToCart } from '../controllers/productsController.js';
import { validateToken } from '../middlewares/validateToken.js';

const productsRouter = Router();

productsRouter.get('/', getProducts)
productsRouter.get('/product/:productId', getProduct)
productsRouter.post('/product/:productId', validateToken, addToCart)

export default productsRouter;