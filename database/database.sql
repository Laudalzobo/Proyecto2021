CREATE DATABASE proyecto;

USE proyecto;

CREATE TABLE empleado(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(25),
    apellido varchar (25),
    dni INT(9),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


DESCRIBE empleado;