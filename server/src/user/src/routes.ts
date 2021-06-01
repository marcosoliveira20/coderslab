import { Router } from "express";

import { ensureAuthenticated } from "../../ensureAuthenticated";
import { CreateUserController } from "./controllers/CreateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { LoginUserController } from "./controllers/LoginUserController";
import { LogoutUserController } from "./controllers/LogoutUserController";
import { ReadAllUsersController } from "./controllers/ReadAllUsersController";
import { ReadUserByEmailController } from "./controllers/ReadUserByEmailController";
import { ReadUserByIdController } from "./controllers/ReadUserByIdController";
import { ReadUserByUsernameController } from "./controllers/ReadUserByUsernameController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const router = Router();

const createUserController = new CreateUserController();
const loginUserController = new LoginUserController();
const readUserByIdController = new ReadUserByIdController();
const readUserByUsernameController = new ReadUserByUsernameController();
const readUserByEmailController = new ReadUserByEmailController();
const readAllUsersController = new ReadAllUsersController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.post("/user/create", createUserController.handle);

router.post("/user/login", loginUserController.handle);
<<<<<<< HEAD
router.get("/user/read/all", readAllUsersController.handle);
// router.use(ensureAuthenticated);
router.post("/user/logout/:id/:token", logoutUserController.handle);
=======
// router.use(ensureAuthenticated)
>>>>>>> ff7d99ed93a25de0e0b40391fd8a17f66cb2c0ad
router.get("/user/read/byId/:id", readUserByIdController.handle);
router.get(
  "/user/read/byUsername/:username",
  readUserByUsernameController.handle
);
router.get("/user/read/byEmail/:email", readUserByEmailController.handle);
router.put("/user/update/:id", updateUserController.handle);
router.delete("/user/delete/:id", deleteUserController.handle);

export { router };
