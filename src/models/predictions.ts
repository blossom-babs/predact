import client from "../database";

// save dataset to the database

export type Prediction = {
  field: string,
  maritalStatus: string,
  applicationMode: string,
  applicationOrder: string,
  course: string,
  attendance: string,
  prevQualification: string,
  prevQualificationGrade: string,
  nationality: string,
  admissionGrade: string,
  displaced: string,
  debtor: string,
  tuitionFees: string,
  gender: string,
  schorlarship: string,
  ageAtEnrollment: string,
  unemploymentRate: string,
  international: string,
  inflationRate: string,
  gdp: string,
  finalTarget: string
}

export type Parent = {
  field: string,
  motherQual: string,
  fatherQual: string,
  motherOcc: string,
  fatherOcc: string
}

export type Unit = {
  field: string,
  firstSemCredit: string,
  firstSemEnroll: string,
  firstSemEval: string,
  firstSemAppr: string,
  firstSemGrade: string,
  firstSemNoEval: string,
  secSemCredit: string,
  secSemEnroll: string,
  secSemEval: string,
  secSemAppr: string,
  secSemGrade: string,
  secSemNoEval: string
}


export class StudentPrediction {
  async saveStudentEvaluation(prediction: Prediction): Promise<Prediction[]> {
    try {
      const conn = await client.connect()
      const sql = `INSERT INTO prediction(field, maritalStatus, applicationMode, applicationOrder, course, attendance, prevQualification, prevQualificationGrade, nationality, admissionGrade, displaced, debtor, tuitionFees, gender, schorlarship, ageAtEnrollment, unemploymentRate, international, inflationRate, gdp, finalTarget) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) RETURNING *`
      const data = Object.values(prediction)
      const res = await conn.query(sql, data)
      conn.release()
      return res.rows
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  async saveParentData(parent: Parent): Promise<Parent[]> {
    try {
      const conn = await client.connect()
      const sql = `INSERT INTO parent(field, motherQualification, fatherQualification, motherOccupation, fatherOccupation) VALUES ($1, $2, $3, $4, $5) RETURNING *`
      const data = Object.values(parent)
      const res = await conn.query(sql, data)
      conn.release()
      return res.rows
    } catch (error) {
      throw new Error(`${error}`)
    }
  }

  async saveCurriculumUnits(unit: Unit): Promise<Unit[]> {
    try {
      const conn = await client.connect()
      const sql = `INSERT INTO units(field, firstSemesterCredited, firstSemesterEnrolled, firstSemesterEval, firstSemesterApproved, firstSemesterGrade, firstSemesterNoEval, secondSemesterCredited, secondSemesterEnrolled, secondSemesterEval, secondSemesterApproved, secondSemesterGrade, secondSemesterNoEval) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`
      const data = Object.values(unit)
      const res = await conn.query(sql, data)
      conn.release()
      return res.rows
    } catch (error) {
      throw new Error(`${error}`)
    }
  }
}