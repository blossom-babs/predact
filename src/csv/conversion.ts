import { Request, Response, NextFunction, Application } from 'express';
import csvtojson from 'csvtojson';
import { promises as fspromises } from 'fs';


const csvFilePath = './src/csv/dataset.csv';
const jsonFilePath = './src/csv/dataset.json';


export const fileConverter = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const convertedFile = await csvtojson().fromFile(csvFilePath);
  await fspromises.writeFile(jsonFilePath, JSON.stringify(convertedFile));
  res.send(convertedFile);
  next();
};

const convertFileRoute = (app: Application) => {
  app.get('/convert', fileConverter, (req, res) => {
    fileConverter;
  });

}

export default convertFileRoute;


