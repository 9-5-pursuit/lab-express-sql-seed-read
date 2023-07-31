const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");

    return allSongs;
  } catch (error) {
    return error;
  }
};

const getSongById = async (id) => {
  try {
    const song = await db.any(`SELECT * FROM songs WHERE id = $1`, id);

    return song;
  } catch (error) {
    return error;
  }
};

const createSong = async (data) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [data.name, data.artist, data.album, data.time, data.is_favorite]
    );

    return newSong;
  } catch (e) {
    return e;
  }
};

const deleteSong = async (id) => {
  try {
    const deletedSong = await db.any(
      `DELETE FROM songs WHERE id = $1 RETURNING *`,
      id
    );

    return deletedSong;
  } catch (e) {
    return e;
  }
};

const updateSongById = async (id, song) => {
  try {
    const updatedSong = await db.any(
      "UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 WHERE id = $6 RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );

    return updatedSong;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  getSongById,
  createSong,
  deleteSong,
  updateSongById,
};
