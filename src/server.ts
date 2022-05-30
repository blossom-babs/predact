import express, { Request, Response, Application } from "express";

const app: Application = express();
const port = 8070;

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
