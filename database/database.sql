CREATE DATABASE proyecto;

USE proyecto;

CREATE TABLE empleado(
    id INT(7) NOT NULL PRIMARY KEY,
    nombre VARCHAR(25),
    apellido varchar (25),
    dni INT(9),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);


DESCRIBE empleado;