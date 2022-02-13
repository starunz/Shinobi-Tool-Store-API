import { Router } from 'express';
import { getProducts, getProduct, addToCart, getCart, updateQty } from '../controllers/productsController.js';
import { validateToken } from '../middlewares/validateToken.js';

const productsRouter = Router();

productsRouter.get('/', getProducts)
productsRouter.get('/product/:productId', getProduct)
productsRouter.post('/product/:productId', validateToken, addToCart)
productsRouter.get('/cart', validateToken, getCart)
productsRouter.post('/cart', validateToken, updateQty)

export default productsRouter;