CREATE TABLE school_admin (
  staff_id varchar(255) NOT NULL,
  password_digest uuid DEFAULT uuid_generate_v4 (),
  password_custom varchar(255),
  profile_photo varchar(255),
  first_name varchar(255) NOT NULL, 
  last_name varchar(255) NOT NULL,
  work_level varchar(255) NOT NULL,
  department varchar(255) NOT NULL,
  date_employed varchar(255) NOT NULL,
  assignment varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  phone_number varchar(255) NOT NULL,
  education varchar(255) NOT NULL,
  PRIMARY KEY(staff_id)
)