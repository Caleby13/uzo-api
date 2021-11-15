import { Router } from "express";
import EntitiesController from "../controllers/EntitiesController";
import authMiddleware from "../middleware/auth";
import validateSchema from "../middleware/validateSchema";
import {
  entitiesSchema,
  entitiesSchemaUpdate,
} from "../schemas/entitiesSchema";

const routes = Router();

routes.post("/", validateSchema(entitiesSchema), EntitiesController.store);
routes.put(
  "/:id",
  validateSchema(entitiesSchemaUpdate),
  EntitiesController.update
);
routes.delete("/:id", EntitiesController.delete);
routes.get("/:id", EntitiesController.show);
routes.get("/", EntitiesController.index);

export default routes;
