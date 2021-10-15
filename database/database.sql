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


CREATE TABLE obras_empleados(
id INT NOT NULL AUTO_INCREMENT,
idEmpleado INT NOT NULL,
idObra INT NOT NULL
);

CREATE TABLE movimiento(
id INT NOT NULL AUTO_INCREMENT,
idObra INT NOT NULL,
idMaterial INT NOT NULL,
cantidad INT NOT NULL,
precioUnitario FLOAT NOT NULL,
precioTotal FLOAT NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE material(
id INT NOT NULL AUTO_INCREMENT,
tipo VARCHAR(25),
cantidad INT NOT NULL,
PRIMARY KEY(id)
);