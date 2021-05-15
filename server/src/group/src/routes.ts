import { Router } from "express";

import { CreateGroupController } from "./controllers/CreateGroupController";
import { ReadGroupByIdController } from "./controllers/ReadGroupByIdController";
import { ReadGroupByTokenController } from "./controllers/ReadGroupByTokenController";
import { ReadGroupByNameController } from "./controllers/ReadGroupByNameController";
import { ReadGroupByCategoryController } from "./controllers/ReadGroupByCategoryController";
import { ReadGroupBySubjectController } from "./controllers/ReadGroupBySubjectController";
import { ReadGroupByLevelController } from "./controllers/ReadGroupByLevelController";
import { ReadAllGroupsController } from "./controllers/ReadAllGroupsController";
import { UpdateGroupController } from "./controllers/UpdateGroupController";
import { DeleteGroupController } from "./controllers/DeleteGroupController";

const router = Router();

const createGroupController = new CreateGroupController();
const readGroupByIdController = new ReadGroupByIdController();
const readGroupByTokenController = new ReadGroupByTokenController();
const readGroupByNameController = new ReadGroupByNameController();
const readGroupByCategoryController = new ReadGroupByCategoryController();
const readGroupBySubjectController = new ReadGroupBySubjectController();
const readGroupByLevelController = new ReadGroupByLevelController();
const readAllGroupsController = new ReadAllGroupsController();
const updateGroupController = new UpdateGroupController();
const deleteGroupController = new DeleteGroupController();

router.post("/group/create", createGroupController.handle);
router.get("/group/read/byId/:id", readGroupByIdController.handle);
router.get("/group/read/byToken/:token", readGroupByTokenController.handle);
router.get("/group/read/byName/:name", readGroupByNameController.handle);
router.get("/group/read/byCategory/:category", readGroupByCategoryController.handle);
router.get("/group/read/bySubject/:subjectLabel", readGroupBySubjectController.handle);
router.get("/group/read/byLevel/:level", readGroupByLevelController.handle);
router.get("/group/read/all", readAllGroupsController.handle);
router.put("/group/update/:id/:idUser", updateGroupController.handle);
router.delete("/group/delete/:id/:idUser", deleteGroupController.handle);

export { router };