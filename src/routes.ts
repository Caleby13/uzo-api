import { Router } from "express";
import SessionRoutes from "./app/routes/SessionRoutes";
import EntitiesRoutes from "./app/routes/EntitiesRoutes";
import UsersRoutes from "./app/routes/UsersRoutes";
import SuperUserRoutes from "./app/routes/SuperUserRoutes";
import authMiddleware from "../src/app/middleware/auth";

const routes = Router();

routes.use("/session", SessionRoutes);
routes.use("/superUser", SuperUserRoutes);

routes.use(authMiddleware);
routes.use("/users", UsersRoutes);
routes.use("/entities", EntitiesRoutes);

export { routes };
