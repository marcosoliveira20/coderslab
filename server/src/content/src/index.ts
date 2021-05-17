import app from "./App"
import { ContentRoutes } from "./routes";

app.use("/", ContentRoutes);

console.log("Content was started in port: 8000 ⚡");

app.listen(8000);
