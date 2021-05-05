import { Router } from "express";

import { CreateUnionUserGroupController } from "./controllers/CreateUnionUserGroupController";
import { ReadUsersController } from "./controllers/ReadUsersController";
import { ReadGroupsController } from "./controllers/ReadGroupsController";
import { DeleteUnionUserGroupController } from "./controllers/DeleteUnionUserGroupController";

const router = Router();

const createUnionUserGroupController = new CreateUnionUserGroupController();
const readUsersController = new ReadUsersController();
const readGroupsController = new ReadGroupsController();
const deleteUnionUserGroupController = new DeleteUnionUserGroupController();

router.post("/unionUserGroup/create", createUnionUserGroupController.handle);
router.get("/unionUserGroup/read/users/:idGroup", readUsersController.handle);
router.get("/unionUserGroup/read/groups/:idUser", readGroupsController.handle);
router.delete("/unionUserGroup/delete/:idUser/:idGroup", deleteUnionUserGroupController.handle);

export { router };