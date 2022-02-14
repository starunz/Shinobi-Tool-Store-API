import { Router } from "express";
import { sendMessage } from "../controllers/clientController.js";

const clientRouter = Router();

clientRouter.post('/support', sendMessage);

export default clientRouter;