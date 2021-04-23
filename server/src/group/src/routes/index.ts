import { Router } from "express";

import { CreateGroupController } from "../controllers/CreateGroupController";
import { ReadGroupController } from "../controllers/ReadGroupController";

const router = Router();

const createGroupController = new CreateGroupController();
const readGroupController = new ReadGroupController();

router.post("/group", createGroupController.handle);
router.get("/group", readGroupController.handle);

export { router };