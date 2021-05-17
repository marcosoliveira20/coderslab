import app from "./App"
import { RoadmapRoutes } from "./routes";

app.use("/", RoadmapRoutes);

console.log("Roadmaps was started in port: 7000 ⚡");

app.listen(7000);
