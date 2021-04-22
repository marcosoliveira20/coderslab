import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";
import { ReadUserController } from "../controllers/ReadUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const readUserController = new ReadUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", readUserController.handle);
usersRoutes.put("/", updateUserController.handle);
usersRoutes.delete("/", deleteUserController.handle);

export { usersRoutes };
