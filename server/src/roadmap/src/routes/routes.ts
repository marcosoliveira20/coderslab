import { Router } from 'express';

import { ensureAuthenticated } from '../../../ensureAuthenticated';
import { CreateRoadmapCustomController } from '../controllers/CreateRoadmapCustomController';
import { CreateRoadmapDefaultController } from '../controllers/CreateRoadmapDefaultController';
import {
  DeleteRoadmapController,
  DeleteRoadmapController,
} from '../controllers/DeleteRoadmapController';
import {
  ReadAllCustomRoadmapRepositories,
  ReadAllCustomRoadmapRepositories,
} from '../controllers/ReadAllCustomRoadmapRepositories';
import { ReadAllDefaultByUserIdRoadmapRepositories } from '../controllers/ReadAllDefaultByUserIdRoadmapRepositories';
import {
  ReadAllDefaultRoadmapRepositories,
  ReadAllDefaultRoadmapRepositories,
} from '../controllers/ReadAllDefaultRoadmapRepositories';
import {
  ReadAllDoneRoadmapRepositories,
  ReadAllDoneRoadmapRepositories,
} from '../controllers/ReadAllDoneRoadmapRepositories';
import {
  ReadAllInProgressRoadmapRepositories,
  ReadAllInProgressRoadmapRepositories,
} from '../controllers/ReadAllInProgressRoadmapRepositories';
import {
  ReadAllRoadmapController,
  ReadAllRoadmapController,
} from '../controllers/ReadAllRoadmapController';
import {
  ReadRoadmapByIdController,
  ReadRoadmapByIdController,
} from '../controllers/ReadRoadmapByIdController';
import { TurnRoadmapCustomizedController } from '../controllers/TurnRoadmapCustomizedController';
import { TurnRoadmapDefaultController } from '../controllers/TurnRoadmapDefaultController';
import { TurnRoadmapDone } from '../controllers/TurnRoadmapDone';
import { TurnRoadmapNotDone } from '../controllers/TurnRoadmapNotDone';
import {
  UpdateLevelController,
  UpdateLevelController,
} from '../controllers/UpdateLevelController';
import {
  UpdateRepositoryContentList,
  UpdateRepositoryContentList,
} from '../controllers/UpdateRepositoryContentList';
import { UpdateRepositoryName } from '../controllers/UpdateRepositoryName';
import { UpdateRepositoryObjective } from '../controllers/UpdateRepositoryObjective';

const RoadmapRoutes = Router();

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
const readAllDefaultRoadmapRepositories =
  new ReadAllDefaultRoadmapRepositories();
const readAllInProgressRoadmapRepositories =
  new ReadAllInProgressRoadmapRepositories();
const readAllDoneRoadmapRepositories = new ReadAllDoneRoadmapRepositories();
const updateLevelController = new UpdateLevelController();
const readAllDefaultByUserIdRoadmapRepositories =
  new ReadAllDefaultByUserIdRoadmapRepositories();

// RoadmapRoutes.use(ensureAuthenticated)
RoadmapRoutes.post(
  '/roadmap/create/default',
  createRoadmapDefaultController.handle,
);
RoadmapRoutes.post(
  '/roadmap/create/custom',
  createRoadmapCustomController.handle,
);
RoadmapRoutes.put(
  '/roadmap/update/custom/:_id',
  turnRoadmapCustomizedController.handle,
);
RoadmapRoutes.put(
  '/roadmap/update/default/:_id',
  turnRoadmapDefaultController.handle,
);
RoadmapRoutes.put(
  '/roadmap/update/done/:_id',
  turnRoadmapDoneController.handle,
);
RoadmapRoutes.put(
  '/roadmap/update/inprogress/:_id',
  turnRoadmapNotDoneController.handle,
);
RoadmapRoutes.put(
  '/roadmap/update/name/:_id',
  updateRepositoryNameController.handle,
);
RoadmapRoutes.put(
  '/roadmap/update/objective/:_id',
  updateRepositoryObjectiveController.handle,
);
RoadmapRoutes.put(
  '/roadmap/update/list/:_id',
  updateRepositoryContentListController.handle,
);
RoadmapRoutes.put('/roadmap/update/level/:_id', updateLevelController.handle);

RoadmapRoutes.get('/roadmap/read/all', readAllRoadmapController.handle);
RoadmapRoutes.get('/roadmap/read/:_id', readRoadmapByIdController.handle);
RoadmapRoutes.get(
  '/roadmap/read/all/custom',
  readAllCustomRoadmapRepositories.handle,
);
RoadmapRoutes.get(
  '/roadmap/read/all/default',
  readAllDefaultRoadmapRepositories.handle,
);
RoadmapRoutes.get(
  '/roadmap/read/all/default/by/userid',
  readAllDefaultByUserIdRoadmapRepositories.handle,
);
RoadmapRoutes.get(
  '/roadmap/read/all/inprogress',
  readAllInProgressRoadmapRepositories.handle,
);
RoadmapRoutes.get(
  '/roadmap/read/all/done',
  readAllDoneRoadmapRepositories.handle,
);
RoadmapRoutes.delete('/roadmap/delete/:_id', deleteRoadmapController.handle);

export { RoadmapRoutes };
