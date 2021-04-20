import express from "express";

const app = express();
app.use(express.json());

console.log("Backend was started in port: 3333 ⚡");

app.listen(3333);
