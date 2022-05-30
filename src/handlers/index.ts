import { Application } from "express";
import StudentRoutes from "./students/students";

const indexRoute = (app: Application) => {
  StudentRoutes(app)
}

export default indexRoute;
