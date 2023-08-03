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
    const getSong = await db.one("SELECT * FROM songs WHERE id = $1", id);
    return getSong;
  } catch (e) {
    throw { status: 404, message: "Song not found" };
    // return e;
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

const updateSong = async (id, data) => {
  try {
    const updatedSong = await db.one(
      "UPDATE songs SET name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 WHERE id = $6 RETURNING *",
      [data.name, data.artist, data.album, data.time, data.is_favorite, id]
    );
    return updatedSong;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (e) {
    throw { status: 404, message: "Song not found" };
  }
};

module.exports = {
  getAllSongs,
  getIndividualSong,
  createSong,
  updateSong,
  deleteSong,
};
