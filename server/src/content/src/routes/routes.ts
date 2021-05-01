import { Router } from "express";

const ContentRoutes = Router();

import { CreateContentController } from "../controllers/CreateContentController";
import { TurnContentDone } from "../controllers/TurnContentDone";
import { TurnContentNotDone } from "../controllers/TurnContentNotDone";
import { ReadAllContentController } from "../controllers/ReadAllContentController";
import { ReadContentByIdController } from "../controllers/ReadContentByIdController";
import { DeleteContentController } from "../controllers/DeleteContentController";
import { ReadAllInProgressContentRepositories } from "../controllers/ReadAllInProgressContentRepositories";
import { ReadAllDoneContentRepositories } from "../controllers/ReadAllDoneContentRepositories";
import { UpdateContentTitle } from "../controllers/UpdateContentTitle";
import { UpdateContenDescription } from "../controllers/UpdateContenDescription"
import { UpdateContenDeadline } from "../controllers/UpdateContenDeadline";
import { UpdateContenReferenceController } from "../controllers/UpdateContenReferenceController";

const createContentController = new CreateContentController();
const turnContentDoneController = new TurnContentDone();
const TurnContentNotDoneController = new TurnContentNotDone();
const readAllContentController = new ReadAllContentController();
const readContentByIdController = new ReadContentByIdController();
const deleteContentController = new DeleteContentController();
const readAllInProgressContentRepositories = new ReadAllInProgressContentRepositories();
const readAllDoneContentRepositories = new ReadAllDoneContentRepositories();
const updateContentTitleController = new UpdateContentTitle();
const updateContentDescription = new UpdateContenDescription();
const updateContenDeadline = new UpdateContenDeadline();
const updateContenReference = new UpdateContenReferenceController();

ContentRoutes.post("/content/create", createContentController.handle);
ContentRoutes.put("/content/update/done/:_id", turnContentDoneController.handle);
ContentRoutes.put("/content/update/inprogress/:_id", TurnContentNotDoneController.handle);
ContentRoutes.put("/content/update/title/:_id", updateContentTitleController.handle);
ContentRoutes.put("/content/update/description/:_id", updateContentDescription.handle);
ContentRoutes.put("/content/update/deadline/:_id", updateContenDeadline.handle);
ContentRoutes.put("/content/update/reference/:_id", updateContenReference.handle);

ContentRoutes.get("/content/read/all", readAllContentController.handle);
ContentRoutes.get("/content/read/:_id", readContentByIdController.handle);
ContentRoutes.get("/content/read/all/inprogress", readAllInProgressContentRepositories.handle);
ContentRoutes.get("/content/read/all/done", readAllDoneContentRepositories.handle);
ContentRoutes.delete("/content/delete/:_id", deleteContentController.handle);

export { ContentRoutes };
