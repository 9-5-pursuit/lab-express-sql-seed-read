DROP DATABASE IF EXISTS tuner_dev;

CREATE DATABASE tuner_dev;

-- Connect to database
\c tuner_dev;

CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

--tables with foreign keys need to be created after
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN,
    artist_id INTEGER REFERENCES artists(id)
    ON DELETE CASCADE
);