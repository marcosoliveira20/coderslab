import app from "./App";

import { router } from "./routes";

app.use("/", router);
console.log("Groups was started in port: 3000 ⚡");

app.listen(3000);
