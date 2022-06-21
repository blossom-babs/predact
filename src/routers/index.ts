import { Application } from "express";
import convertFileRoute from "../csv/conversion";
import AdminRoutes from "./admin";
import PredictionRoutes from "./predictions";
import StudentRoutes from "./students";

const indexRoute = (app: Application) => {
  StudentRoutes(app)
  convertFileRoute(app)
  PredictionRoutes(app)
  AdminRoutes(app)
}

export default indexRoute;
