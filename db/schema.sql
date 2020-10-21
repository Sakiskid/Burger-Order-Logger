DROP DATABASE burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers 
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(40) NOT NULL,
    eaten BOOLEAN NOT NULL,
    PRIMARY KEY (id) 
)