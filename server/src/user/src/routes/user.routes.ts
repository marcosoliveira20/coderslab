import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";
import { ReadUserController } from "../controllers/ReadUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const readUserController = new ReadUserController();
const updateUserController = new UpdateUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", readUserController.handle);
usersRoutes.put("/", updateUserController.handle);

export { usersRoutes };
