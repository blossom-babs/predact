import express, { Request, Response, Application } from "express";
import indexRoute from "./routers";

const app: Application = express();
const port = 8070;
app.use(express.json())

indexRoute(app)

app.get("/", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ Message: "Prediction system route" });
});

app.get("*", (req: Request, res: Response) => {
  res
    .status(200)
    .json({ Message: "You have accessed a route that does not exist." });
});

app.listen(port);
