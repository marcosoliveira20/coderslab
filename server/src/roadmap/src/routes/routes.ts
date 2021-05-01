import { Router } from "express";

const RoadmapRoutes = Router();

import { CreateRoadmapDefaultController } from "../controllers/CreateRoadmapDefaultController";
import { CreateRoadmapCustomController } from "../controllers/CreateRoadmapCustomController";
import { TurnRoadmapCustomizedController } from "../controllers/TurnRoadmapCustomizedController";
import { TurnRoadmapDefaultController } from "../controllers/TurnRoadmapDefaultController";
import { TurnRoadmapDone } from "../controllers/TurnRoadmapDone";
import { TurnRoadmapNotDone } from "../controllers/TurnRoadmapNotDone";
import { UpdateRepositoryName } from "../controllers/UpdateRepositoryName";
import { UpdateRepositoryObjective } from "../controllers/UpdateRepositoryObjective";
import { UpdateRepositoryContentList } from "../controllers/UpdateRepositoryContentList";
import { ReadAllRoadmapController } from "../controllers/ReadAllRoadmapController";
import { ReadRoadmapByIdController } from "../controllers/ReadRoadmapByIdController";
import { DeleteRoadmapController } from "../controllers/DeleteRoadmapController";
import { ReadAllCustomRoadmapRepositories } from "../controllers/ReadAllCustomRoadmapRepositories"
import { ReadAllDefaultRoadmapRepositories } from "../controllers/ReadAllDefaultRoadmapRepositories"
import { ReadAllInProgressRoadmapRepositories } from "../controllers/ReadAllInProgressRoadmapRepositories"
import { ReadAllDoneRoadmapRepositories } from "../controllers/ReadAllDoneRoadmapRepositories"

const createRoadmapDefaultController = new CreateRoadmapDefaultController();
const createRoadmapCustomController = new CreateRoadmapCustomController();
const turnRoadmapCustomizedController = new TurnRoadmapCustomizedController();
const turnRoadmapDefaultController = new TurnRoadmapDefaultController();
const turnRoadmapDoneController = new TurnRoadmapDone();
const turnRoadmapNotDoneController = new TurnRoadmapNotDone();
const updateRepositoryNameController = new UpdateRepositoryName();
const updateRepositoryObjectiveController = new UpdateRepositoryObjective();
const updateRepositoryContentListController = new UpdateRepositoryContentList();
const readAllRoadmapController = new ReadAllRoadmapController();
const readRoadmapByIdController = new ReadRoadmapByIdController();
const deleteRoadmapController = new DeleteRoadmapController();
const readAllCustomRoadmapRepositories = new ReadAllCustomRoadmapRepositories();
const readAllDefaultRoadmapRepositories = new ReadAllDefaultRoadmapRepositories();
const readAllInProgressRoadmapRepositories = new ReadAllInProgressRoadmapRepositories();
const readAllDoneRoadmapRepositories = new ReadAllDoneRoadmapRepositories();

RoadmapRoutes.post("/roadmap/create/default", createRoadmapDefaultController.handle);
RoadmapRoutes.post("/roadmap/create/custom", createRoadmapCustomController.handle);
RoadmapRoutes.put("/roadmap/update/custom/:_id", turnRoadmapCustomizedController.handle);
RoadmapRoutes.put("/roadmap/update/default/:_id", turnRoadmapDefaultController.handle);
RoadmapRoutes.put("/roadmap/update/done/:_id", turnRoadmapDoneController.handle);
RoadmapRoutes.put("/roadmap/update/inprogress/:_id", turnRoadmapNotDoneController.handle);
RoadmapRoutes.put("/roadmap/update/name/:_id", updateRepositoryNameController.handle);
RoadmapRoutes.put("/roadmap/update/objective/:_id", updateRepositoryObjectiveController.handle);
RoadmapRoutes.put("/roadmap/update/list/:_id", updateRepositoryContentListController.handle);
RoadmapRoutes.get("/roadmap/read/all", readAllRoadmapController.handle);
RoadmapRoutes.get("/roadmap/read/:_id", readRoadmapByIdController.handle);
RoadmapRoutes.get("/roadmap/read/all/customized", readAllCustomRoadmapRepositories.handle);
RoadmapRoutes.get("/roadmap/read/all/default", readAllDefaultRoadmapRepositories.handle);
RoadmapRoutes.get("/roadmap/read/all/inprogress", readAllInProgressRoadmapRepositories.handle);
RoadmapRoutes.get("/roadmap/read/all/done", readAllDoneRoadmapRepositories.handle);
RoadmapRoutes.delete("/roadmap/delete/:_id", deleteRoadmapController.handle);

export { RoadmapRoutes };
