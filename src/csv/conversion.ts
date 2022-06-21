import { Request, Response, NextFunction, Application } from 'express';
import csvtojson from 'csvtojson';
import { promises as fspromises } from 'fs';

const csvFilePath = './src/csv/school_admins.csv';
const jsonFilePath = './src/csv/school_admins.json';

export const fileConverter = async (
  req: Request,
  res: Response,
) => {
  const convertedFile = await csvtojson().fromFile(csvFilePath);
  const data = convertedFile.slice(0, 20)
  await fspromises.writeFile(jsonFilePath, JSON.stringify(data));
  res.status(200).send(convertedFile);
};

const convertFileRoute = (app: Application) => {
  app.get('/api/v1/convert', fileConverter);
}

export default convertFileRoute;


