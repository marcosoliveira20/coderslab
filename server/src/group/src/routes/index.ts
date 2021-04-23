import { Router } from "express";

import { CreateGroupController } from "../controllers/CreateGroupController";

const router = Router();

const createGroupController = new CreateGroupController();

router.post("/group", createGroupController.handle);

export { router };