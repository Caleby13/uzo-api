import { Router } from "express";
import EntitiesController from "../controllers/EntitiesController";
import authMiddleware from "../middleware/auth";

const routes = Router();

routes.use(authMiddleware);

routes.get("/entities", EntitiesController.index);

export default routes;
