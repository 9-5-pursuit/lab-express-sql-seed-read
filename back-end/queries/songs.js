const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return {
      status: "Error",
      message: error.message,
    };
  }
};

const getSongById = async (id) => {
    try {
        const song = await db.any("SELECT * FROM songs WHERE id=$1", id);
        return song;
    } catch (error) {
        return {
          status: "Error",
          message: error.message,
        };
    }
};

const createNewSong = async (song) => {
  try {
    const newSong = await db.one("INSERT INTO songs (name, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *", 
    [song.name, song.artist, song.album, song.time, song.is_favorite])
    return newSong;
  } catch (error) {
    return {
      status: "Error",
      message: error.message,
    };
  }
};

const deleteSongById = async (id) => {
  try {
    const deletedSong = await db.any(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
      id
    );
    return deletedSong;
  } catch (error) {
    return {
      status: "Error",
      message: error.message,
    };
  }
};

const updateSong = async (id, song) => {
  try {
    const originalSong = await db.oneOrNone(
      "SELECT * FROM songs WHERE id = $1",
      id
    );

    if (!originalSong) {
      return null;
    }

    let combinedSong = {
      ...originalSong,
      ...song,
    };
    const updatedSong = await db.one(
      "UPDATE Songs SET name =$1, artist =$2, album =$3, time =$4, is_favorite=$5 WHERE id =$6 RETURNING *",
      [
        combinedSong.name,
        combinedSong.artist,
        combinedSong.album,
        combinedSong.time,
        combinedSong.is_favorite,
        id,
      ]
    );
    return updatedSong;
  } catch (error) {
    return { status: "Error", message: error.message };
  }
};

module.exports = {
  getAllSongs,
  getSongById,
  createNewSong,
  deleteSongById,
  updateSong,
};