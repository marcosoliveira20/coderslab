import express from "express";

import { categoryRoutes } from "./category.routes";
import { subjectRoutes } from "./routes";

const app = express();
app.use(express.json());

app.use("/", subjectRoutes);
app.use("/category", categoryRoutes);

console.log("Subject was started in port: 5000 ⚡");

app.listen(5000);
