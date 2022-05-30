CREATE TABLE school_admin(
  id uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
  userid varchar(255) NOT NULL,
  password_digest varchar(255) NOT NULL
)