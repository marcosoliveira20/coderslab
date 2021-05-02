import { Router } from "express";

import CreateScheduleController from "./controllers/CreateScheduleController";
import DeleteScheduleController from "./controllers/DeleteScheduleController";
import ReadAllScheduleController from "./controllers/ReadAllScheduleController";
import ReadByIdScheduleController from "./controllers/ReadByIdScheduleController";
import ReadByLabelScheduleController from "./controllers/ReadByLabelScheduleController";
import UpdateScheduleController from "./controllers/UpdateScheduleController";

const ScheduleRoutes = Router();

const createScheduleController = new CreateScheduleController();
const readByIdScheduleController = new ReadByIdScheduleController();
const readByLabelScheduleController = new ReadByLabelScheduleController();
const readAllScheduleController = new ReadAllScheduleController();
const updateScheduleController = new UpdateScheduleController();
const deleteScheduleController = new DeleteScheduleController();

ScheduleRoutes.post("/Schedule/create", createScheduleController.handle);
ScheduleRoutes.get(
  "/Schedule/read/byId/:id",
  readByIdScheduleController.handle
);
ScheduleRoutes.get(
  "/Schedule/read/byLabel/:label",
  readByLabelScheduleController.handle
);
ScheduleRoutes.get("/Schedule/read/all", readAllScheduleController.handle);
ScheduleRoutes.put("/Schedule/update", updateScheduleController.handle);
ScheduleRoutes.delete("/Schedule/delete/:id", deleteScheduleController.handle);

export { ScheduleRoutes };
