import { Router } from "express";
import UsersController from "../controllers/UsersController";
import validateSchema from "../middleware/validateSchema";
import { usersSchema } from "../schemas/usersSchema";

const routes = Router();

routes.post("/", validateSchema(usersSchema), UsersController.store);
routes.get("/:id", UsersController.show);
routes.get("/", UsersController.index);
routes.delete("/:id", UsersController.delete);

export default routes;
