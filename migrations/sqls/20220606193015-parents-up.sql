CREATE Table parent(
  CONSTRAINT fk_prediction FOREIGN KEY (field) REFERENCES prediction(field) ON DELETE CASCADE,
  id SERIAL PRIMARY KEY NOT NULL,
  field varchar(255) NOT NULL,
  motherQualification varchar(255) NOT NULL,
  fatherQualification varchar(255) NOT NULL,
  motherOccupation varchar(255) NOT NULL,
  fatherOccupation varchar(255) NOT NULL
)