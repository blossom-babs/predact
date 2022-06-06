CREATE TABLE prediction(
  field varchar(255) NOT NULL,
  maritalStatus varchar(255) NOT NULL,
  applicationMode varchar(255) NOT NULL,
  applicationOrder varchar(255) NOT NULL,
  course varchar(255) NOT NULL,
  attendance varchar(255) NOT NULL,
  prevQualification varchar(255) NOT NULL,
  prevQualificationGrade varchar(255) NOT NULL,
  nationality varchar(255) NOT NULL,
  admissionGrade varchar(255) NOT NULL,
  displaced varchar(255) NOT NULL,
  debtor varchar(255) NOT NULL,
  tuitionFees varchar(255) NOT NULL,
  gender varchar(255) NOT NULL,
  schorlarship varchar(255) NOT NULL,
  ageAtEnrollment varchar(255) NOT NULL,
  unemploymentRate varchar(255) NOT NULL,
  international varchar(255) NOT NULL,
  inflationRate varchar(255) NOT NULL,
  gdp varchar(255) NOT NULL,
  finalTarget varchar(255) NOT NULL,
  PRIMARY KEY (field)
)