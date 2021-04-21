import express, { Router } from "express";
import { router } from "./routes/index";

const app = express();
app.use(express.json());

app.use("/", router)

console.log("Backend was started in port: 3333 ⚡");

app.listen(3333);
