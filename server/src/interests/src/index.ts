import app from "./App";
import { router } from "./routes";

app.use("/", router);

console.log("Interests was started in port: 5000 ⚡");
app.listen(5000);
