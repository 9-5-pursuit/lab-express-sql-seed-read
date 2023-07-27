
-- CREATE TABLE songs(
--     id SERIAL PRIMARY KEY,
--     name TEXT NOT NULL,
--     artist TEXT NOT NULL,
--     album TEXT,
--     time TEXT,
--     is_favorite BOOLEAN,
--     artist_id INTEGER REFERENCES artists(id),
--     album_id INTEGER REFERENCES albums(id)
--  );

DROP DATABASE IF EXISTS tuner_db;
CREATE DATABASE tuner_db;

 \c tuner_db;

 CREATE TABLE artists( 
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
 );

 CREATE TABLE albums( 
   id SERIAL PRIMARY KEY,
   name TEXT NOT NULL
 );


 CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    picture TEXT,
    preview TEXT,
    is_favorite BOOLEAN,
    artist_id INTEGER REFERENCES artists(id),
    album_id INTEGER REFERENCES albums(id)
 );





