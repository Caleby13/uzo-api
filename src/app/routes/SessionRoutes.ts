import { Router } from "express";
import SessionController from "../controllers/SessionController";
import validateSchema from "../middleware/validateSchema";
import { sessionSchema } from "../schemas/sessionSchema";

const routes = Router();

routes.post("/", validateSchema(sessionSchema), SessionController.store);

export default routes;
