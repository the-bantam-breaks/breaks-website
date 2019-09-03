-- Database: breaks_db
-- DROP DATABASE breaks_db;
-- TODO - Garrett - what should owner be for prod?
CREATE DATABASE breaks_db
    WITH
    OWNER = bantam
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

GRANT TEMPORARY, CONNECT ON DATABASE breaks_db TO PUBLIC;

GRANT ALL ON DATABASE breaks_db TO bantam;
