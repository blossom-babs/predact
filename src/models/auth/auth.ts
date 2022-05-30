import client from '../../database';
import bcrypt from 'bcrypt';

let pepper: string;
let salt: number;

const { SALT_ROUNDS, BCRYPT_PASSWORD } = process.env

export type Student = {
  matric_no: string;
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
      throw new Error(`Cannot get students. Returned with erroe ${error}`)
    }
  }
}