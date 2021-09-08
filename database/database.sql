CREATE DATABASE proyecto;

USE proyecto;

CREATE TABLE empleado(
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(25),
    apellido varchar (25),
    dni INT(9),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    legajo INT,
    mail VARCHAR(50),
    telefono INT,
    PRIMARY KEY(id)


);


DESCRIBE empleado;





CREATE TABLE obra(
id INT NOT NULL AUTO_INCREMENT,
nombre VARCHAR(25),
calle,
altura INT(9),
localidad VARCHAR(25),
provincia VARCHAR(25),
fechaInicio DATE,
PRIMARY KEY(id)

);