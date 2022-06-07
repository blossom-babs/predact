import { Application } from "express";
import convertFileRoute from "../csv/conversion";
import PredictionRoutes from "./predictions/predictions";
import StudentRoutes from "./students/students";

const indexRoute = (app: Application) => {
  StudentRoutes(app)
  convertFileRoute(app)
  PredictionRoutes(app)
}

export default indexRoute;
