import { Application } from "express";
import convertFileRoute from "../csv/conversion";
import StudentRoutes from "./students/students";

const indexRoute = (app: Application) => {
  StudentRoutes(app)
  convertFileRoute(app)
}

export default indexRoute;
