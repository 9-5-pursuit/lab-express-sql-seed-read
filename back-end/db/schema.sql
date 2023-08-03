-- Drop the database if it exists
DROP DATABASE IF EXISTS tuner;

-- Create the database
CREATE DATABASE tuner;

-- Connect to the tuner database
\c tuner;

-- Create the artists table
CREATE TABLE artists (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE -- Name of the artist (made distinct with UNIQUE constraint)
);

-- Create the songs table
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

