DROP DATABASE IF EXISTS chatFlight_db; 
CREATE DATABASE chatFlight_db;

USE chatFlight_db;

CREATE TABLE login( 
    id INT NOT NULL AUTO_INCREMENT,
    first_name varchar (100) NOT NULL, 
    last_name varchar (100) NOT NULL, 
    email varchar (100) NOT NULL, 
    password varchar (100) NOT NULL

    primary key (id)
);

CREATE TABLE previousFlight(
    id INT NOT NULL AUTO_INCREMENT,
    flight varchar (100) NOT NULL,  
    destination VARCHAR (100) NOT NULL, 
    departing VARCHAR (100) NOT NULL, 
    departing_date DATE, 
    arrival_date DATE
    PRIMARY KEY (id)
);