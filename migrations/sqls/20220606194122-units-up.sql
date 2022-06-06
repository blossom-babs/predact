CREATE TABLE units(
  CONSTRAINT fk_prediction FOREIGN KEY (field) REFERENCES prediction(field) ON DELETE CASCADE,
  id SERIAL PRIMARY KEY NOT NULL,
  field varchar(255) NOT NULL,
  firstSemesterCredited varchar(255) NOT NULL,
  firstSemesterEnrolled varchar(255) NOT NULL,
  firstSemesterEval varchar(255) NOT NULL,
  firstSemesterApproved varchar(255) NOT NULL,
  firstSemesterGrade varchar(255) NOT NULL,
  firstSemesterNoEval varchar(255) NOT NULL,

  secondSemesterCredited varchar(255) NOT NULL,
  secondSemesterEnrolled varchar(255) NOT NULL,
  secondSemesterEval varchar(255) NOT NULL,
  secondSemesterApproved varchar(255) NOT NULL,
  secondSemesterGrade varchar(255) NOT NULL,
  secondSemesterNoEval varchar(255) NOT NULL
)