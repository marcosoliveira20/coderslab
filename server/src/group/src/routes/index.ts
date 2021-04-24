import { Router } from "express";

import { CreateGroupController } from "../controllers/CreateGroupController";
import { ReadGroupController } from "../controllers/ReadGroupController";
import { UpdateGroupController } from "../controllers/UpdateGroupController";

const router = Router();

const createGroupController = new CreateGroupController();
const readGroupController = new ReadGroupController();
const updateGroupController = new UpdateGroupController();

router.post("/group", createGroupController.handle);
router.get("/group", readGroupController.handle);
router.put("/group", updateGroupController.handle);

export { router };