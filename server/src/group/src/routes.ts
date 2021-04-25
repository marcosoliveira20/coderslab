import { Router } from "express";

import { CreateGroupController } from "./controllers/CreateGroupController";
import { ReadGroupByIdController } from "./controllers/ReadGroupByIdController";
import { ReadGroupByNameController } from "./controllers/ReadGroupByNameController";
import { ReadAllGroupsController } from "./controllers/ReadAllGroupsController";
import { UpdateGroupController } from "./controllers/UpdateGroupController";
import { DeleteGroupController } from "./controllers/DeleteGroupController";

const router = Router();

const createGroupController = new CreateGroupController();
const readGroupByIdController = new ReadGroupByIdController();
const readGroupByNameController = new ReadGroupByNameController();
const readAllGroupsController = new ReadAllGroupsController();
const updateGroupController = new UpdateGroupController();
const deleteGroupController = new DeleteGroupController();

router.post("/group/create", createGroupController.handle);
router.get("/group/read/byId/:id", readGroupByIdController.handle);
router.get("/group/read/byName/:name", readGroupByNameController.handle);
router.get("/group/read/all", readAllGroupsController.handle);
router.put("/group/update", updateGroupController.handle);
router.delete("/group/delete/:id", deleteGroupController.handle);

export { router };