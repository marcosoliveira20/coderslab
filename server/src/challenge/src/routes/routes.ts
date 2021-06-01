import { Router } from "express";

const ChallengeRoutes = Router();

import { CreateChallengeController } from "../controllers/CreateChallengeController";
import { TurnChallengeDoneController } from "../controllers/TurnChallengeDoneController";
import { TurnChallengeNotDoneController } from "../controllers/TurnChallengeNotDoneController";
import { ReadAllChallengeController } from "../controllers/ReadAllChallengeController";
import { ReadChallengeByIdController } from "../controllers/ReadChallengeByIdController";
import { DeleteChallengeController } from "../controllers/DeleteChallengeController";
import { ReadAllInProgressChallengeController } from "../controllers/ReadAllInProgressChallengeController";
import { ReadAllDoneChallengeController } from "../controllers/ReadAllDoneChallengeController";
import { UpdateChallengeTitleController } from "../controllers/UpdateChallengeTitleController";
import { UpdateChallengeDescriptionController } from "../controllers/UpdateChallengeDescriptionController"
import { CreateChallengeByRoadmapController } from "../controllers/CreateChallengeByRoadmapController";
import { ensureAuthenticated } from "../../../ensureAuthenticated";

const createChallengeController = new CreateChallengeController();
const turnChallengeDoneController = new TurnChallengeDoneController();
const turnChallengeNotDoneController = new TurnChallengeNotDoneController();
const readAllChallengeController = new ReadAllChallengeController();
const readChallengeByIdController = new ReadChallengeByIdController();
const deleteChallengeController = new DeleteChallengeController();
const readAllInProgressChallengeController = new ReadAllInProgressChallengeController();
const readAllDoneChallengeController = new ReadAllDoneChallengeController();
const updateChallengeTitleController = new UpdateChallengeTitleController();
const updateChallengeDescriptionController = new UpdateChallengeDescriptionController();
const createChallengeByRoadmapController = new CreateChallengeByRoadmapController();

// ChallengeRoutes.use(ensureAuthenticated)
ChallengeRoutes.post("/challenge/create", createChallengeController.handle);
ChallengeRoutes.post("/challenge/create/By/Roadmap", createChallengeByRoadmapController.handle);
ChallengeRoutes.put("/challenge/update/done/:_id", turnChallengeDoneController.handle);
ChallengeRoutes.put("/challenge/update/inprogress/:_id", turnChallengeNotDoneController.handle);
ChallengeRoutes.put("/challenge/update/title/:_id", updateChallengeTitleController.handle);
ChallengeRoutes.put("/challenge/update/description/:_id", updateChallengeDescriptionController.handle);
ChallengeRoutes.get("/challenge/read/all", readAllChallengeController.handle);
ChallengeRoutes.get("/challenge/read/:_id", readChallengeByIdController.handle);
ChallengeRoutes.get("/challenge/read/all/inprogress", readAllInProgressChallengeController.handle);
ChallengeRoutes.get("/challenge/read/all/done", readAllDoneChallengeController.handle);
ChallengeRoutes.delete("/challenge/delete/:_id", deleteChallengeController.handle);

export { ChallengeRoutes };
