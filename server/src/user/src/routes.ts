import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { ReadUserByIdController } from "./controllers/ReadUserByIdController";
import { ReadUserByUsernameController } from "./controllers/ReadUserByUsernameController";
import { ReadAllUsersController } from "./controllers/ReadAllUsersController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";

const router = Router();

const createUserController = new CreateUserController();
const readUserByIdController = new ReadUserByIdController();
const readUserByUsernameController = new ReadUserByUsernameController();
const readAllUsersController = new ReadAllUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.post("/user/create", createUserController.handle);
router.get("/user/read/byId/:id", readUserByIdController.handle);
router.get("/user/read/byUsername/:username", readUserByUsernameController.handle);
router.get("/user/read/getAll", readAllUsersController.handle);
router.put("/user/update", updateUserController.handle);
router.delete("/user/delete/:id", deleteUserController.handle);

export { router };