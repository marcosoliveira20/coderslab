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

router.post("/Schedule/create", createScheduleController.handle);
router.get("/Schedule/read/byId/:id", readByIdScheduleController.handle);
router.get("/Schedule/read/all", readAllScheduleController.handle);
router.put("/Schedule/update", updateScheduleController.handle);
router.delete("/Schedule/delete/:id", deleteScheduleController.handle);

export { router };
