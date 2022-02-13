import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { sendInfos } from "../controllers/buyerController.js";

const buyerRouter = Router();

buyerRouter.post('/infos', validateToken, sendInfos);

export default buyerRouter;
