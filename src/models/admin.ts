import client from "../database";

export type Admin = {
  staffId: string
  profilePhoto: string,
  firstName: string,
  lastName: string,
  workLevel: string,
  department: string,
  dateEmployed: string,
  assignment: string,
  email: string,
  phoneNumber: string,
  education: string,
  university: string
}

export class SchoolAdmin {
  // save school admin to database - I forgot to add the university
  async saveSchoolAdmin(admins: Admin): Promise<Admin[]> {
    try {
      const conn = await client.connect()
      const sql = `INSERT INTO school_admin(staff_id, profile_photo, first_name, last_name, work_level, department, date_employed, assignment, email, phone_number, education, university) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *`
      const data = Object.values(admins)
      const res = await conn.query(sql, data)
      conn.release()
      return res.rows
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}