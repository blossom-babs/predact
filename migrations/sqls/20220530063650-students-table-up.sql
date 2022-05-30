CREATE TABLE students(
  id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
  matric_no varchar(255) NOT NULL,
  password_digest varchar(255) NOT NULL
)