(Instalar PostgreSQL)

$ sudo -i -u postgres

$ psql

ALTER USER postgres PASSWORD 'mipassword';

CREATE DATABASE sgg;

\c sgg;
# \c sgg es necesario cada vez que iniciemos
# una sesión interactivade de psql

CREATE TABLE obras(
    id BIGSERIAL NOT NULL primary key,
    nombre VARCHAR(60) NOT NULL,
    fecha DATE DEFAULT CURRENT_DATE,
    ubicacion VARCHAR(60) NOT NULL
);

CREATE TABLE gastos(
    id BIGSERIAL NOT NULL,
    nombre VARCHAR(60) NOT NULL,
    fecha DATE DEFAULT CURRENT_DATE,
    valor INT,
    obra BIGSERIAL NOT NULL references obras(id)
);

INSERT INTO obras(nombre, ubicacion) values ('Obra de prueba', 'Valdivia');

SELECT * FROM obras;

