import { Router } from "express";

import { CreateGroupController } from "../controllers/CreateGroupController";
import { ReadGroupController } from "../controllers/ReadGroupController";
import { UpdateGroupController } from "../controllers/UpdateGroupController";
import { DeleteGroupController } from "../controllers/DeleteGroupController";

const router = Router();

const createGroupController = new CreateGroupController();
const readGroupController = new ReadGroupController();
const updateGroupController = new UpdateGroupController();
const deleteGroupController = new DeleteGroupController();

router.post("/group", createGroupController.handle);
router.get("/group", readGroupController.handle);
router.put("/group", updateGroupController.handle);
router.delete("/group", deleteGroupController.handle);

export { router };