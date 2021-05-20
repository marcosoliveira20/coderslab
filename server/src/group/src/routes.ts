import { Router } from "express";

import { CreateGroupController } from "./controllers/CreateGroupController";
import { ReadGroupByIdController } from "./controllers/ReadGroupByIdController";
import { ReadGroupByTokenController } from "./controllers/ReadGroupByTokenController";
import { ReadGroupByOwnerController } from "./controllers/ReadGroupByOwnerController";
import { ReadAllGroupsController } from "./controllers/ReadAllGroupsController";
import { UpdateGroupController } from "./controllers/UpdateGroupController";
import { DeleteGroupController } from "./controllers/DeleteGroupController";

const router = Router();

const createGroupController = new CreateGroupController();
const readGroupByIdController = new ReadGroupByIdController();
const readGroupByTokenController = new ReadGroupByTokenController();
const readGroupByOwnerController = new ReadGroupByOwnerController();
const readAllGroupsController = new ReadAllGroupsController();
const updateGroupController = new UpdateGroupController();
const deleteGroupController = new DeleteGroupController();

router.post("/group/create", createGroupController.handle);
router.get("/group/read/byId/:id", readGroupByIdController.handle);
router.get("/group/read/byToken/:token", readGroupByTokenController.handle);
router.get("/group/read/byOwner/:idUser", readGroupByOwnerController.handle);
router.get("/group/read/all", readAllGroupsController.handle);
router.put("/group/update/:id/:idUser", updateGroupController.handle);
router.delete("/group/delete/:id/:idUser", deleteGroupController.handle);

export { router };