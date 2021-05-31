import { Router } from "express";
import { ensureAuthenticated } from "../../ensureAuthenticated";

import CreateSubjectController from "./controllers/CreateSubjectController";
import DeleteSubjectController from "./controllers/DeleteSubjectController";
import ReadAllSubjectController from "./controllers/ReadAllSubjectController";
import ReadByIdSubjectController from "./controllers/ReadByIdSubjectController";
import ReadByLabelSubjectController from "./controllers/ReadByLabelSubjectController";
import UpdateSubjectController from "./controllers/UpdateSubjectController";

const router = Router();

const createSubjectController = new CreateSubjectController();
const readByIdSubjectController = new ReadByIdSubjectController();
const readByLabelSubjectController = new ReadByLabelSubjectController();
const readAllSubjectController = new ReadAllSubjectController();
const updateSubjectController = new UpdateSubjectController();
const deleteSubjectController = new DeleteSubjectController();

router.use(ensureAuthenticated)
router.post("/subject/create", createSubjectController.handle);
router.get("/subject/read/byId/:id", readByIdSubjectController.handle);
router.get("/subject/read/byLabel/:label", readByLabelSubjectController.handle);
router.get("/subject/read/all", readAllSubjectController.handle);
router.put("/subject/update/:id", updateSubjectController.handle);
router.delete("/subject/delete/:id", deleteSubjectController.handle);

export { router };
