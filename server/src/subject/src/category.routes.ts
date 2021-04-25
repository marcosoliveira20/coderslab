import { Router } from "express";

import CreateCategoryController from "./controllers/category/CreateCategoryController";
import DeleteCategoryController from "./controllers/category/DeleteCategoryController";
import ReadAllCategoryController from "./controllers/category/ReadAllCategoryController";
import ReadByIdCategoryController from "./controllers/category/ReadByIdCategoryController";
import UpdateCategoryController from "./controllers/category/UpdateCategoryController";

const categoryRoutes = Router();

const createCategoryController = new CreateCategoryController();
const readByIdCategoryController = new ReadByIdCategoryController();
const readAllCategoryController = new ReadAllCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

categoryRoutes.post("/create", createCategoryController.handle);
categoryRoutes.get("/read/byId/:id", readByIdCategoryController.handle);
categoryRoutes.get("/read/all", readAllCategoryController.handle);
categoryRoutes.put("/update", updateCategoryController.handle);
categoryRoutes.delete("/delete/:id", deleteCategoryController.handle);

// Category

export { categoryRoutes };
