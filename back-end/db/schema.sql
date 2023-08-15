DROP DATABASE IF EXISTS songs_dev;
CREATE DATABASE songs_dev;

\c songs_dev;

CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time INT,
    is_favorite BOOLEAN
);


DROP TABLE IF EXISTS playlists;

CREATE TABLE playlists (
    id SERIAL PRIMARY KEY,
    name  TEXT NOT NULL,
    genre TEXT NOT NULL,
    song_id INTEGER REFERENCES songs (id)
    ON DELETE CASCADE
);

