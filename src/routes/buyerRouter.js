import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { sendInfos } from "../controllers/buyerController.js";

import { checkout } from "../controllers/buyerController.js";

const buyerRouter = Router();

buyerRouter.post('/infos', validateToken, sendInfos);
buyerRouter.get('/checkout', validateToken, checkout);
export default buyerRouter;
