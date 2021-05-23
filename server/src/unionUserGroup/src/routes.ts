import { Router } from "express";

import { CreateUnionUserGroupController } from "./controllers/CreateUnionUserGroupController";
import { ReadAllGroupsBySearchController } from "./controllers/ReadAllGroupsBySearchController";
import { ReadAllUsersByGroupController } from "./controllers/ReadAllUsersByGroupController";
import { ReadAllGroupsByUserController } from "./controllers/ReadAllGroupsByUserController";
import { ReadAllGroupsByOwnerController } from "./controllers/ReadAllGroupsByOwnerController";
import { DeleteUnionUserGroupController } from "./controllers/DeleteUnionUserGroupController";
import { DeleteUnionUserAllGroupController } from "./controllers/DeleteUnionUserAllGroupController";

const router = Router();

const createUnionUserGroupController = new CreateUnionUserGroupController();
const readAllGroupsBySearchController = new ReadAllGroupsBySearchController();
const readAllUsersByGroupController = new ReadAllUsersByGroupController();
const readAllGroupsByUserController = new ReadAllGroupsByUserController();
const readAllGroupsByOwnerController = new ReadAllGroupsByOwnerController();
const deleteUnionUserGroupController = new DeleteUnionUserGroupController();
const deleteUnionUserAllGroupController = new DeleteUnionUserAllGroupController();

router.post("/unionUserGroup/create", createUnionUserGroupController.handle);
router.post("/unionUserGroup/read/search", readAllGroupsBySearchController.handle);
router.get("/unionUserGroup/read/allUsersByGroup/:idGroup", readAllUsersByGroupController.handle);
router.get("/unionUserGroup/read/allGroupsByUser/:idUser", readAllGroupsByUserController.handle);
router.get("/unionUserGroup/read/allGroupsByOwner/:idUser", readAllGroupsByOwnerController.handle);
router.delete("/unionUserGroup/delete/one/:idUser/:idGroup", deleteUnionUserGroupController.handle);
router.delete("/unionUserGroup/delete/allGroup/:idGroup", deleteUnionUserAllGroupController.handle);

export { router };