import app from "./App";
import { router } from "./routes";

app.use("/", router);

console.log("UnionUserGroup was started in port: 2000 ⚡");
app.listen(2000);