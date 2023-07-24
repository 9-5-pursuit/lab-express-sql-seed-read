const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (e) {
    return e;
  }
};

const getIndividualSong = async (id) => {
  try {
    const getSong = await db.any("SELECT * FROM songs WHERE id = $1", id);
    return getSong;
  } catch (e) {
    return e;
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
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (e) {
    return e;
  }
};

module.exports = {
  getAllSongs,
  getIndividualSong,
  createSong,
  deleteSong,
};
