import { Request, Response, Application } from "express";
import { StudentStore, Student } from "../../models/auth/auth";

const store = new StudentStore()

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

const StudentRoutes = (app: Application) => {
  app.get('/students', index);
}

export default StudentRoutes;