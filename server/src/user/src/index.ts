import app from "./App";
import { router } from "./routes";

app.use("/", router);

console.log("Users was started in port: 3000 ⚡");
app.listen(1000);