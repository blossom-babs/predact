import { Request, Response, Application } from "express";
import { SchoolAdmin, Admin } from "../models";
import fs from 'fs'
const store = new SchoolAdmin()

// save the files from the dataset to the database
const jsonFilePath = './src/csv/school_admins.json';

const adminToDB = async (req: Request, res: Response) => {
  try {
    let admin: Admin;
    fs.readFile(jsonFilePath, async (err, data) => {
      if (err) throw err;
      let processedData = data.toString()
      let admins = JSON.parse(processedData);

      for (let person of admins) {
        admin = {
          staffId: person['seq'],
          profilePhoto: person[''],
          firstName: person['first'],
          lastName: person['last'],
          workLevel: person['level'],
          department: person['department'],
          dateEmployed: person['date employed'],
          assignment: person['special assignment'],
          email: person['email'],
          phoneNumber: person['phone number'],
          education: person['highest level of education'],
        }
        const conn = await store.saveSchoolAdmin(admin)
        res.status(201)
      }
    })

  } catch (error) {
    console.log(`${error}`)
    res.status(400)
  }
}

const AdminRoutes = (app: Application) => {
  app.get('/api/v1/admin-to-db', adminToDB)
}

export default AdminRoutes