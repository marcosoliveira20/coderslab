import { Router } from "express";

import CreateScheduleController from "./controllers/CreateScheduleController";
import DeleteScheduleController from "./controllers/DeleteScheduleController";
import ReadAllScheduleController from "./controllers/ReadAllScheduleController";
import ReadByIdScheduleController from "./controllers/ReadByIdScheduleController";
import UpdateScheduleController from "./controllers/UpdateScheduleController";

const router = Router();

const createScheduleController = new CreateScheduleController();
const readByIdScheduleController = new ReadByIdScheduleController();
const readAllScheduleController = new ReadAllScheduleController();
const updateScheduleController = new UpdateScheduleController();
const deleteScheduleController = new DeleteScheduleController();

router.post("/schedule/create", createScheduleController.handle);
router.get("/schedule/read/byId/:id", readByIdScheduleController.handle);
router.get("/schedule/read/all", readAllScheduleController.handle);
router.put("/schedule/update", updateScheduleController.handle);
router.delete("/schedule/delete/:id", deleteScheduleController.handle);

export { router };
