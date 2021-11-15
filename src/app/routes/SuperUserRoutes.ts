import { Router } from "express";
import SuperUserController from "../controllers/SuperUserController";

const routes = Router();

routes.post("/", SuperUserController.store);

export default routes;
