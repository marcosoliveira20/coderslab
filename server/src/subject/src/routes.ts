import { Router } from "express";

import CreateSubjectController from "./controllers/CreateSubjectController";
import DeleteSubjectController from "./controllers/DeleteSubjectController";
import ReadAllSubjectController from "./controllers/ReadAllSubjectController";
import ReadByIdSubjectController from "./controllers/ReadByIdSubjectController";
import ReadByLabelSubjectController from "./controllers/ReadByLabelSubjectController";
import UpdateSubjectController from "./controllers/UpdateSubjectController";

const subjectRoutes = Router();

const createSubjectController = new CreateSubjectController();
const readByIdSubjectController = new ReadByIdSubjectController();
const readByLabelSubjectController = new ReadByLabelSubjectController();
const readAllSubjectController = new ReadAllSubjectController();
const updateSubjectController = new UpdateSubjectController();
const deleteSubjectController = new DeleteSubjectController();

subjectRoutes.post("/subject/create", createSubjectController.handle);
subjectRoutes.get("/subject/read/byId/:id", readByIdSubjectController.handle);
subjectRoutes.get(
  "/subject/read/byLabel/:label",
  readByLabelSubjectController.handle
);
subjectRoutes.get("/subject/read/all", readAllSubjectController.handle);
subjectRoutes.put("/subject/update", updateSubjectController.handle);
subjectRoutes.delete("/subject/delete/:id", deleteSubjectController.handle);

export { subjectRoutes };
