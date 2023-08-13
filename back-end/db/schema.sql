DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;
CREATE TABLE artist(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    genre TEXT
);


CREATE TABLE songs (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 album TEXT,
 time TEXT,
 is_favorite BOOLEAN
);

CREATE TABLE collaborations(
    song_id INTEGER REFERENCES songs (id)
 ON DELETE CASCADE,
    artist_id INTEGER REFERENCES artist(id)
 ON DELETE CASCADE
);