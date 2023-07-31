const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("select * from songs order by id asc");

    return allSongs;
  } catch (error) {
    return error;
  }
};

const songById = async (id) => {
  try {
    const song = await db.any("select * from songs where id = $1", id);

    return song;
  } catch (error) {
    return error;
  }
};

const createSong = async (song) => {
  try {
    const newSong = await db.one(
      "insert into songs (name, artist, album, time, is_favorite) values ($1, $2, $3, $4, $5) returning *",
      [song.name, song.artist, song.album, song.time, song.is_favorite]
    );

    return newSong;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const deletedSong = await db.any(
      "delete from songs where id = $1 returning *",
      id
    );

    return deletedSong;
  } catch (error) {
    return error;
  }
};

const updateById = async (id, song) => {
  try {
    const updatedSong = await db.any(
      "update songs set name = $1, artist = $2, album = $3, time = $4, is_favorite = $5 where id = $6 returning *",
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );

    return updatedSong;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
  songById,
  createSong,
  deleteSong,
  updateById,
};
