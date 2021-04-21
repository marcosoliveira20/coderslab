import { Router } from "express";
import { usersRoutes } from "./user.routes";

const router = Router();

router.use("/user", usersRoutes);

export {router}
