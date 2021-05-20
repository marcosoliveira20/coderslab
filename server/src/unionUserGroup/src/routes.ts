import { Router } from "express";

import { CreateUnionUserGroupController } from "./controllers/CreateUnionUserGroupController";
import { ReadAllUsersByGroupController } from "./controllers/ReadAllUsersByGroupController";
import { ReadAllGroupsByUserController } from "./controllers/ReadAllGroupsByUserController";
import { ReadAllGroupsByOwnerController } from "./controllers/ReadAllGroupsByOwnerController";
import { DeleteUnionUserGroupController } from "./controllers/DeleteUnionUserGroupController";

const router = Router();

const createUnionUserGroupController = new CreateUnionUserGroupController();
const readAllUsersByGroupController = new ReadAllUsersByGroupController();
const readAllGroupsByUserController = new ReadAllGroupsByUserController();
const readAllGroupsByOwnerController = new ReadAllGroupsByOwnerController();
const deleteUnionUserGroupController = new DeleteUnionUserGroupController();

router.post("/unionUserGroup/create", createUnionUserGroupController.handle);
router.get("/unionUserGroup/read/allUsersByGroup/:idGroup", readAllUsersByGroupController.handle);
router.get("/unionUserGroup/read/allGroupsByUser/:idUser", readAllGroupsByUserController.handle);
router.get("/unionUserGroup/read/allGroupsByOwner/:idUser", readAllGroupsByOwnerController.handle);
router.delete("/unionUserGroup/delete/:idUser/:idGroup", deleteUnionUserGroupController.handle);

export { router };