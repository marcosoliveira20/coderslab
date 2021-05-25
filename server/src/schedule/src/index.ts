import app from "./App";
import { router } from "./routes";

app.use("/", router);

console.log("Schedule was started in port: 4000 ⚡");

app.listen(4000);
