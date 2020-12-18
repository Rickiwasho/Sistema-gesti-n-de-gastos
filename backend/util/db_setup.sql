(Instalar PostgreSQL)

$ sudo -i -u postgres

$ psql

ALTER USER postgres PASSWORD 'mipassword';

CREATE DATABASE sgg;

\c sgg;
# \c sgg es necesario cada vez que iniciemos
# una sesión interactivade de psql

CREATE TABLE obras(
    id BIGSERIAL NOT NULL,
    nombre VARCHAR(60) NOT NULL
);

INSERT INTO obras(nombre) values ('Obra de prueba');

SELECT * FROM obras;

