-- Created the database
CREATE DATABASE burgers_db;
USE burgers_db;

--Created burgers table
CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

