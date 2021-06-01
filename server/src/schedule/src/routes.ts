import { Router } from "express";

import { ensureAuthenticated } from "../../ensureAuthenticated";
import CreateScheduleController from "./controllers/CreateScheduleController";
import DeleteScheduleController from "./controllers/DeleteScheduleController";
import ReadAllScheduleController from "./controllers/ReadAllScheduleController";
import ReadByGroupNextScheduleController from "./controllers/ReadByGroupNextScheduleController";
import ReadByGroupScheduleController from "./controllers/ReadByGroupScheduleController";
import ReadByIdScheduleController from "./controllers/ReadByIdScheduleController";
import ReadByOwnerScheduleController from "./controllers/ReadByOwnerScheduleController";
import UpdateScheduleController from "./controllers/UpdateScheduleController";

const router = Router();

const createScheduleController = new CreateScheduleController();
const readByIdScheduleController = new ReadByIdScheduleController();
const readByOwnerScheduleController = new ReadByOwnerScheduleController();
const readByGroupScheduleController = new ReadByGroupScheduleController();
const readByGroupNextScheduleController = new ReadByGroupNextScheduleController();
const readAllScheduleController = new ReadAllScheduleController();
const updateScheduleController = new UpdateScheduleController();
const deleteScheduleController = new DeleteScheduleController();

// router.use(ensureAuthenticated)
router.post("/schedule/create", createScheduleController.handle);
router.get("/schedule/read/byId/:id", readByIdScheduleController.handle);
router.get(
  "/schedule/read/byOwner/:owner",
  readByOwnerScheduleController.handle
);
router.get(
  "/schedule/read/byIdGroup/:id_group",
  readByGroupScheduleController.handle
);
router.get(
  "/schedule/read/byIdGroup/nextSchedule/:id_group",
  readByGroupNextScheduleController.handle
);
router.get("/schedule/read/all", readAllScheduleController.handle);
router.put("/schedule/update/:id", updateScheduleController.handle);
router.delete("/schedule/delete/:id", deleteScheduleController.handle);

export { router };
