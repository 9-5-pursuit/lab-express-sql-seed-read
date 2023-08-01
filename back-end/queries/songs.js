const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const getAllSongs = await db.any(`SELECT * FROM songs`);

    return getAllSongs;
  } catch (e) {
    console.log(e);
  }
};
const getSongById = async (id) => {
  try {
    const songById = await db.any(`SELECT * FROM songs WHERE id = $1`, id);

    return songById;
  } catch (e) {
    console.log(e);
  }
};
const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album is_favorite, time) VALUES ($1, $2, $3, $4) RETURNING *",
      [song.name, song.artist, song.album, song.is_favorite, song.time]
    );

    return newSong;
  } catch (e) {
    console.log(e);
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
      `UPDATE songs set name = $1, artist = $2, album = $3, time = $4, is_favorite = $5, $6, RETURNING * WHERE id = $6`,
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );
    console.log(updatedSong);
    return updatedSong;
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getAllSongs,
  getSongById,
  createSong,
  deleteSong,
  updateSongById,
};
