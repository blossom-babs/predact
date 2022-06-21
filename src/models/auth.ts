import client from '../database';
import bcrypt from 'bcrypt';

let pepper: string;
let salt: number;

const { SALT_ROUNDS, BCRYPT_PASSWORD } = process.env

if (BCRYPT_PASSWORD && SALT_ROUNDS) {
  pepper = BCRYPT_PASSWORD;
  salt = Number(SALT_ROUNDS)
}

export type Student = {
  matricNo: string;
  password: string;
}

export class StudentStore {
  async index(): Promise<Student[]> {
    try {
      const sql = `SELECT * FROM students`;
      const conn = await client.connect()
      const result = await conn.query(sql);
      conn.release()
      return result.rows;
    } catch (error) {
      throw new Error(`Cannot get students. Returned with error ${error}`)
    }
  }

  async create(student: Student): Promise<Student | string> {
    try {
      const conn = await client.connect()
      student.password = await bcrypt.hash(student.password + pepper, salt)
      let studentMatric = student.matricNo
      let findStudentInSchoolDB = `SELECT * FROM all_students WHERE matric_no='${studentMatric}'`
      let studentQuery = await conn.query(findStudentInSchoolDB)
      if (studentQuery.rows.length < 1) {
        return `Student with matric ${studentMatric} does not exist`
      } else {
        const sql = `INSERT INTO students (matric_no, password_digest) VALUES ($1, $2) RETURNING *`
        const studentData = Object.values(student)
        const result = await conn.query(sql, studentData)
        conn.release()
        return result.rows[0]
      }
    } catch (error) {
      throw new Error(`Error while creating user: ${error}`)
    }
  }

  async authenticate(matric: string, password: string): Promise<Student | string> {
    try {
      const conn = await client.connect()
      const sql = `SELECT * FROM students WHERE matric_no='${matric}'`
      const result = await conn.query(sql)
      let response = ''
      if (result.rows.length) {
        const student = result.rows[0]
        const match = await bcrypt.compare(password + pepper, student.password_digest)

        if (match) {
          response = student
        } else {
          response = 'Incorrect password'
        }
      }
      conn.release()
      return response || 'User does not exist';
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}