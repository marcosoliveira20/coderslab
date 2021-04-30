import { Router } from "express";

import { CreateGroupController } from "./controllers/CreateGroupController";
import { ReadGroupByIdController } from "./controllers/ReadGroupByIdController";
import { ReadGroupByNameController } from "./controllers/ReadGroupByNameController";
import { ReadGroupByCategoryController } from "./controllers/ReadGroupByCategoryController";
import { ReadGroupByTokenController } from "./controllers/ReadGroupByTokenController";
import { ReadGroupBySubjectController } from "./controllers/ReadGroupBySubjectController";
import { ReadAllGroupsController } from "./controllers/ReadAllGroupsController";
import { UpdateGroupController } from "./controllers/UpdateGroupController";
import { UpdateGroupIncludeUserController } from "./controllers/UpdateGroupIncludeUserController";
import { UpdateGroupRemoveUserController } from "./controllers/UpdateGroupRemoveUserController";
import { DeleteGroupController } from "./controllers/DeleteGroupController";

const router = Router();

const createGroupController = new CreateGroupController();
const readGroupByIdController = new ReadGroupByIdController();
const readGroupByNameController = new ReadGroupByNameController();
const readGroupByCategoryController = new ReadGroupByCategoryController();
const readGroupByTokenController = new ReadGroupByTokenController();
const readGroupBySubjectController = new ReadGroupBySubjectController();
const readAllGroupsController = new ReadAllGroupsController();
const updateGroupController = new UpdateGroupController();
const updateGroupIncludeUserController = new UpdateGroupIncludeUserController();
const updateGroupRemoveUserController = new UpdateGroupRemoveUserController();
const deleteGroupController = new DeleteGroupController();

router.post("/group/create", createGroupController.handle);
router.get("/group/read/byId/:id", readGroupByIdController.handle);
router.get("/group/read/byName/:name", readGroupByNameController.handle);
router.get("/group/read/byCategory/:category", readGroupByCategoryController.handle);
router.get("/group/read/byToken/:token", readGroupByTokenController.handle);
router.get("/group/read/bySubject/:subjectLabel", readGroupBySubjectController.handle);
router.get("/group/read/all", readAllGroupsController.handle);
router.put("/group/update/includeUser/:id/:idUser", updateGroupIncludeUserController.handle);
router.put("/group/update/removeUser/:id/:idUser", updateGroupRemoveUserController.handle);
router.put("/group/update/:id/:idUser", updateGroupController.handle);
router.delete("/group/delete/:id/:idUser", deleteGroupController.handle);

export { router };