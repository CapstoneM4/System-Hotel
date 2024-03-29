import "dotenv/config";
import express from "express";
import "express-async-errors";
import "reflect-metadata";
import routesADM from "./routers/admin/admin.routes";
import routesClients from "./routers/clients/clients.routes";
import routesEmployee from "./routers/employee/employee.routes";
import handleAppErrorMiddleware from "./middlewares/handleAppError.middleware";

const app = express();
app.use(express.json());

app.use("/hotel", routesADM, routesEmployee);
app.use("/service", routesEmployee);
app.use("/clients", routesClients);
app.use(handleAppErrorMiddleware);

app.listen(process.env.PORT || 3000, () => {
  console.log("App runing");
});
export default app;
