import { Router } from "express";

import { ensureAuthenticated } from "../../ensureAuthenticated";
import { CreateUnionUserGroupController } from "./controllers/CreateUnionUserGroupController";
import { DeleteUnionUserAllGroupController } from "./controllers/DeleteUnionUserAllGroupController";
import { DeleteUnionUserGroupController } from "./controllers/DeleteUnionUserGroupController";
import { ReadAllGroupsByOwnerController } from "./controllers/ReadAllGroupsByOwnerController";
import { ReadAllGroupsBySearchController } from "./controllers/ReadAllGroupsBySearchController";
import { ReadAllGroupsByUserController } from "./controllers/ReadAllGroupsByUserController";
import { ReadAllGroupsController } from "./controllers/ReadAllGroupsController";
import { ReadAllUsersByGroupController } from "./controllers/ReadAllUsersByGroupController";

const router = Router();

const createUnionUserGroupController = new CreateUnionUserGroupController();
const readAllGroupsBySearchController = new ReadAllGroupsBySearchController();
const readAllUsersByGroupController = new ReadAllUsersByGroupController();
const readAllGroupsByUserController = new ReadAllGroupsByUserController();
const readAllGroupsByOwnerController = new ReadAllGroupsByOwnerController();
const readAllGroupsController = new ReadAllGroupsController();
const deleteUnionUserGroupController = new DeleteUnionUserGroupController();
const deleteUnionUserAllGroupController = new DeleteUnionUserAllGroupController();

// router.use(ensureAuthenticated)
router.post("/unionUserGroup/create", createUnionUserGroupController.handle);
router.post(
  "/unionUserGroup/read/search",
  readAllGroupsBySearchController.handle
);
router.get(
  "/unionUserGroup/read/allUsersByGroup/:idGroup",
  readAllUsersByGroupController.handle
);
router.get(
  "/unionUserGroup/read/allGroupsByUser/:idUser",
  readAllGroupsByUserController.handle
);
router.get(
  "/unionUserGroup/read/allGroupsByOwner/:idUser",
  readAllGroupsByOwnerController.handle
);
router.get("/unionUserGroup/read/allGroups", readAllGroupsController.handle);
router.delete(
  "/unionUserGroup/delete/one/:idUser/:idGroup",
  deleteUnionUserGroupController.handle
);
router.delete(
  "/unionUserGroup/delete/allGroup/:idGroup",
  deleteUnionUserAllGroupController.handle
);

export { router };
