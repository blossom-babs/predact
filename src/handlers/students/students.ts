import { Request, Response, Application } from "express";
import { StudentStore, Student } from "../../models/auth/auth";
import jwt from 'jsonwebtoken';

const store = new StudentStore()
const secret = process.env.TOKEN_SECRET as string;

const index = async (req: Request, res: Response) => {
  try {
    const students: Student[] = await store.index()
    if (students.length < 1) {
      res.status(200).json({ Message: 'No students data to show' })
      return;
    }
    res.status(200).json(students)
  } catch (error) {
    console.log(`${error}`)
    res.status(401)
  }
}

const create = async (req: Request, res: Response) => {
  try {
    const student: Student | string = await store.create(req.body)
    if (typeof student === 'string') {
      res.status(200).json({ Message: 'School does not have this student data' })
      return;
    }
    const jsonToken = jwt.sign(req.body, secret)
    res.status(200).json({ student, jsonToken })
  } catch (error) {
    res.status(401)
  }
}

const login = async (req: Request, res: Response) => {
  try {
    const user = await store.authenticate(
      req.body.matricNo,
      req.body.password
    )
    
    res.status(200).json(user )
  } catch (error) {
    console.log(`${error}`)
    res.status(401)
  }
}

const StudentRoutes = (app: Application) => {
  app.get('/students', index);
  app.post('/students', create);
  app.post('/students/sign-in', login);
}

export default StudentRoutes;