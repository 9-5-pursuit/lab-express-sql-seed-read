const db = require("../db/dbConfig.js");

// INDEX GET ALL SONGS
const getAllSongsData = async () => {
  try {
    const allSongsData = await db.any("SELECT * FROM songs");
    return allSongsData;
  } catch (e) {
    console.log(e);
    return e;
  }
};
//GET SONGS BY ID
const songById = async (id) => {
  try {
    const song = await db.any(`SELECT * FROM songs WHERE id = $1`, id);

    return song;
  } catch (e) {
    return e;
  }
};
//CREATE SONGS
const createSong = async (data) => {
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
      data.name,
      data.artist,
      data.album,
      data.time,
      data.is_favorite
    );
    return newSong;
  } catch (e) {
    console.log(e);
    return e;
  }
};
// UPDATE SONGS

const updateSongById = async (id, song) => {
  try {
    const updatedSong = await db.oneOrNone(
      "UPDATE songs SET name = $2, artist = $3, album = $4 , time = $5, is_favorite = $6 WHERE id = $1 RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );
    return updatedSong;
  } catch (e) {
    console.log(e);
    return e;
  }
};

//DELETE SONG
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

module.exports = {
  getAllSongsData,
  songById,
  createSong,
  deleteSong,
  updateSongById,
};
