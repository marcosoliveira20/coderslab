import { Router } from "express";

import { CreateUserController } from "../controllers/CreateUserController";
import { ReadUserController } from "../controllers/ReadUserController";
import { UpdateUserController } from "../controllers/UpdateUserController";
import { DeleteUserController } from "../controllers/DeleteUserController";

const router = Router();

const createUserController = new CreateUserController();
const readUserController = new ReadUserController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.post("/user", createUserController.handle);
router.get("/user", readUserController.handle);
router.put("/user", updateUserController.handle);
router.delete("/user", deleteUserController.handle);

export { router };
