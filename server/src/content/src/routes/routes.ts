import { Router } from 'express';

import { ensureAuthenticated } from '../../../ensureAuthenticated';
import { CreateContentController } from '../controllers/CreateContentController';
import { CreateContentCustomRoadmapController } from '../controllers/CreateContentCustomRoadmapController';
import { DeleteContentByRoadmapIDController } from '../controllers/DeleteContentByRoadmapIDController';
import { DeleteContentController } from '../controllers/DeleteContentController';
import { ReadAllContentController } from '../controllers/ReadAllContentController';
import { ReadAllDoneContentRepositories } from '../controllers/ReadAllDoneContentRepositories';
import { ReadAllInProgressContentRepositories } from '../controllers/ReadAllInProgressContentRepositories';
import { ReadByRoadmapDeadline } from '../controllers/ReadByRoadmapDeadline';
import { ReadContentByIdController } from '../controllers/ReadContentByIdController';
import { ReadContentByRoadmapIdController } from '../controllers/ReadContentByRoadmapIdController';
import { ReadDashboardController } from '../controllers/ReadDashboardController';
import { ReadOverdueContents } from '../controllers/ReadOverdueContents';
import { TurnContentDone } from '../controllers/TurnContentDone';
import { TurnContentNotDone } from '../controllers/TurnContentNotDone';
import { UpdateContenChallenge } from '../controllers/UpdateContenChallenge';
import { UpdateContenDeadline } from '../controllers/UpdateContenDeadline';
import { UpdateContenDescription } from '../controllers/UpdateContenDescription';
import { UpdateContenReferenceController } from '../controllers/UpdateContenReferenceController';
import { UpdateContentTitle } from '../controllers/UpdateContentTitle';

const ContentRoutes = Router();

const createContentController = new CreateContentController();
const turnContentDoneController = new TurnContentDone();
const TurnContentNotDoneController = new TurnContentNotDone();
const readAllContentController = new ReadAllContentController();
const readContentByIdController = new ReadContentByIdController();
const deleteContentController = new DeleteContentController();
const readAllInProgressContentRepositories =
  new ReadAllInProgressContentRepositories();
const readAllDoneContentRepositories = new ReadAllDoneContentRepositories();
const updateContentTitleController = new UpdateContentTitle();
const updateContentDescription = new UpdateContenDescription();
const updateContenDeadline = new UpdateContenDeadline();
const updateContenReference = new UpdateContenReferenceController();
const updateContenChallenge = new UpdateContenChallenge();
const readContentByRoadmapIdController = new ReadContentByRoadmapIdController();
const deleteContentByRoadmapIDController =
  new DeleteContentByRoadmapIDController();
const readOverdueContents = new ReadOverdueContents();
const readByRoadmapDeadline = new ReadByRoadmapDeadline();
const createContentCustomRoadmapController =
  new CreateContentCustomRoadmapController();
const readDashboardController = new ReadDashboardController();

// ContentRoutes.use(ensureAuthenticated)
ContentRoutes.post('/content/create', createContentController.handle);
ContentRoutes.post(
  '/content/create/By/Roadmap/Custom',
  createContentCustomRoadmapController.handle,
);
ContentRoutes.put(
  '/content/update/done/:_id',
  turnContentDoneController.handle,
);
ContentRoutes.put(
  '/content/update/inprogress/:_id',
  TurnContentNotDoneController.handle,
);
ContentRoutes.put(
  '/content/update/title/:_id',
  updateContentTitleController.handle,
);
ContentRoutes.put(
  '/content/update/description/:_id',
  updateContentDescription.handle,
);
ContentRoutes.put('/content/update/deadline/:_id', updateContenDeadline.handle);
ContentRoutes.put(
  '/content/update/reference/:_id',
  updateContenReference.handle,
);
ContentRoutes.put(
  '/content/update/challenge/:_id',
  updateContenChallenge.handle,
);

ContentRoutes.get('/content/dashboard', readDashboardController.handle);
ContentRoutes.get('/content/read/all', readAllContentController.handle);
ContentRoutes.get('/content/read/:_id', readContentByIdController.handle);
ContentRoutes.get(
  '/content/read/byroadmapid/:_id',
  readContentByRoadmapIdController.handle,
);
ContentRoutes.get(
  '/content/read/all/inprogress',
  readAllInProgressContentRepositories.handle,
);
ContentRoutes.get(
  '/content/read/all/done',
  readAllDoneContentRepositories.handle,
);
ContentRoutes.get(
  '/content/read/overdue/:_roadmap_id',
  readOverdueContents.handle,
);
ContentRoutes.get(
  '/content/read/By/Date/:_roadmap_id',
  readByRoadmapDeadline.handle,
);
ContentRoutes.delete('/content/delete/:_id', deleteContentController.handle);
ContentRoutes.delete(
  '/content/delete/roadmapid/:_id',
  deleteContentByRoadmapIDController.handle,
);

export { ContentRoutes };
