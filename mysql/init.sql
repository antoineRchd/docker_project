CREATE DATABASE IF NOT EXISTS docker_project;

USE docker_project;

CREATE TABLE IF NOT EXISTS test_table (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    value INT
);

INSERT INTO test_table (name, value) VALUES ('Item1', 100), ('Item2', 200);
