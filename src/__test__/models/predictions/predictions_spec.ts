import { Prediction, StudentPrediction } from "../../../models/predictions/predictions"
const store = new StudentPrediction()

xdescribe('#test Predictions model', () => {
  let prediction: Prediction

  beforeEach(() => {
    prediction = {
      field: "22",
      maritalStatus: "1",
      applicationMode: "15",
      applicationOrder: "1",
      course: "1",
      attendance: "1",
      prevQualification: "1",
      prevQualificationGrade: "1",
      nationality: "1",
      admissionGrade: "1",
      displaced: "1",
      debtor: "1",
      tuitionFees: "1",
      gender: "1",
      schorlarship: "1",
      ageAtEnrollment: "1",
      unemploymentRate: "1",
      international: "1",
      inflationRate: "1",
      gdp: "1",
      finalTarget: "1"
    }
  })

  it('saves general information about the student to the database', async () => {
    const res = await store.saveStudentEvaluation(prediction)
    expect(res).toBeDefined
    expect(res.length).toBe(1)
  })
})