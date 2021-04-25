import express from "express";

import { router } from "./routes";

const app = express();
app.use(express.json());

app.use("/", router);

console.log("Interests was started in port: 6000 ⚡");

app.listen(6000);
