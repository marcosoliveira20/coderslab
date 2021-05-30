import app from "./App";
import { router } from "./routes";

app.use("/", router);

console.log("Subject was started in port: 11000 ⚡");

app.listen(11000);
