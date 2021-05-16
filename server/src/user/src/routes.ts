import { Router } from "express";

import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { ReadAllUsersController } from "./controllers/ReadAllUsersController";
import { ReadUserByEmailController } from "./controllers/ReadUserByEmailController";
import { ReadUserByIdController } from "./controllers/ReadUserByIdController";
import { ReadUserByUsernameController } from "./controllers/ReadUserByUsernameController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const router = Router();

const createUserController = new CreateUserController();
const readUserByIdController = new ReadUserByIdController();
const readUserByUsernameController = new ReadUserByUsernameController();
const readUserByEmailController = new ReadUserByEmailController();
const readAllUsersController = new ReadAllUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.post("/user/create", createUserController.handle);
router.get("/user/read/byId/:id", readUserByIdController.handle);
router.get(
  "/user/read/byUsername/:username",
  readUserByUsernameController.handle
);
router.get("/user/read/byEmail/:email", readUserByEmailController.handle);
router.get("/user/read/all", readAllUsersController.handle);
router.put("/user/update/:id", updateUserController.handle);
router.delete("/user/delete/:id", deleteUserController.handle);

export { router };
