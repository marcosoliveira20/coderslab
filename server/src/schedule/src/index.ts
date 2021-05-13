import express from "express";

import { ScheduleRoutes } from "./routes";

const app = express();
app.use(express.json());

app.use("/", ScheduleRoutes);

console.log("Schedule was started in port: 5000 ⚡");

app.listen(5000);
