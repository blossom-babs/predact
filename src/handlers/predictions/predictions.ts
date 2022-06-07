import { Request, Response, Application, NextFunction } from "express";
import { StudentPrediction, Prediction, Parent, Unit } from "../../models/predictions/predictions";
import fs from 'fs'
const store = new StudentPrediction()

// save the files from the dataset to the database
const jsonFilePath = './src/csv/dataset.json';

const saveDataToDB = async (req: Request, res: Response) => {
  try {
    let studentObj: Prediction;
    fs.readFile(jsonFilePath, async (err, data) => {
      if (err) throw err;
      let processedData = data.toString()
      let students = JSON.parse(processedData);

      for (let student of students) {
        studentObj = {
          field: student['field1'],
          maritalStatus: student['Marital status'],
          applicationMode: student["Application mode"],
          applicationOrder: student["Application order"],
          course: student["Course"],
          attendance: student["Daytime/evening attendance"],
          prevQualification: student["Previous qualification"],
          prevQualificationGrade: student["Previous qualification (grade)"],
          nationality: student["Nacionality"],
          admissionGrade: student["Admission grade"],
          displaced: student["Displaced"],
          debtor: student["Debtor"],
          tuitionFees: student["Tuition fees up to date"],
          gender: student["Gender"],
          schorlarship: student["Scholarship holder"],
          ageAtEnrollment: student["Age at enrollment"],
          unemploymentRate: student["Unemployment rate"],
          international: student["International"],
          inflationRate: student["Inflation rate"],
          gdp: student["GDP"],
          finalTarget: student["Target"]
        }
        const conn = await store.saveStudentEvaluation(studentObj)
        res.status(201)
      }
    })

  } catch (error) {
    console.log(`${error}`)
    res.status(400)
  }
}

const saveParentToDB = async (req: Request, res: Response) => {
  try {
    let parentObj: Parent
    fs.readFile(jsonFilePath, async (err, data) => {
      if (err) throw err;
      let processedData = data.toString()
      let parents = JSON.parse(processedData)

      for (let parent of parents) {
        parentObj = {
          field: parent["field1"],
          motherQual: parent["Mother's qualification"],
          fatherQual: parent["Father's qualification"],
          motherOcc: parent["Mother's occupation"],
          fatherOcc: parent["Father's occupation"]
        }
        const conn = await store.saveParentData(parentObj)
        res.status(201)
      }
    })
  } catch (error) {
    console.log(`${error}`)
    res.status(400)
  }
}

const saveStudentGrade = async (req: Request, res: Response) => {
  try {
    let unitObj: Unit
    fs.readFile(jsonFilePath, async (err, data) => {
      if (err) throw err;
      let processedData = data.toString()
      let units = JSON.parse(processedData)

      for(let unit of units){
        unitObj = {
          field: unit["field1"],
          firstSemCredit: unit["Curricular units 1st sem (credited)"],
          firstSemEnroll: unit["Curricular units 1st sem (enrolled)"],
          firstSemEval: unit["Curricular units 1st sem (evaluations)"],
          firstSemAppr: unit["Curricular units 1st sem (approved)"],
          firstSemGrade: unit["Curricular units 1st sem (grade)"],
          firstSemNoEval: unit["Curricular units 1st sem (without evaluations)"],
          secSemCredit: unit["Curricular units 2nd sem (credited)"],
          secSemEnroll: unit["Curricular units 2nd sem (enrolled)"],
          secSemEval: unit["Curricular units 2nd sem (evaluations)"],
          secSemAppr: unit["Curricular units 2nd sem (approved)"],
          secSemGrade: unit["Curricular units 2nd sem (grade)"],
          secSemNoEval: unit["Curricular units 2nd sem (without evaluations)"]
        }
        const conn = await store.saveCurriculumUnits(unitObj)
        res.status(201)
      }

    })
  } catch (error) {
    console.log(`${error}`)
    res.status(400)
  }
}


const PredictionRoutes = (app: Application) => {
  app.post('/prediction/raw', saveDataToDB);
  app.post('/prediction/parent', saveParentToDB);
  app.post('/prediction/grade', saveStudentGrade);
}

export default PredictionRoutes;