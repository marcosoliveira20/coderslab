import express from "express";

import { subjectRoutes } from "./routes";

const app = express();
app.use(express.json());

app.use("/", subjectRoutes);

console.log("Subject was started in port: 5000 ⚡");

app.listen(5000);
