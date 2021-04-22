import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";
import { ReadUserController } from "../controllers/ReadUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const readUserController = new ReadUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", readUserController.handle);

export { usersRoutes };
