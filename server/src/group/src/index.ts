import express from "express";

import { router } from "./routes/index";

const app = express();
app.use(express.json());

app.use("/", router);

console.log("Groups was started in port: 4000 ⚡");

app.listen(4000);
