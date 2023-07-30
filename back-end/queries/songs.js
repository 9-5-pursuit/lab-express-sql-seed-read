const db = require("../db/dbConfig");

const getAllSongs = async () => {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    console.log(error);
  }
};

const getSongById = async (id) => {
  try {
    const songById = await db.any("SELECT * FROM songs WHERE id=$1", id);
    return songById;
  } catch (error) {
    console.log(error);
  }
};

const createSong = async (data) => {
  const { name, artist, album, time, is_favorite } = data;
  try {
    const newSong = await db.one(
      "INSERT INTO songs (name,artist,album,time,is_favorite) VALUES ($1,$2,$3,$4,$5) RETURNING *",
      [name, artist, album, time, is_favorite]
    );
    return newSong;
  } catch (error) {
    console.log(error);
  }
};

const deleteSongById = async (id) => {
  try {
    const removeSong = await db.oneOrNone(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
      id
    );
    return removeSong;
  } catch (error) {
    console.log(error);
  }
};

const updateSongById = async (data, id) => {
  const selectedSong = await getSongById(id);
  const updatedSongData = {
    ...selectedSong[0],
    ...data,
  };
  try {
    const { name, artist, album, time, is_favorite, id } = updatedSongData;
    const updateSong = await db.any(
      "UPDATE songs SET name=$1,artist=$2,album=$3,time=$4,is_favorite=$5 WHERE id=$6 RETURNING *",
      [name, artist, album, time, is_favorite, id]
    );
    return updateSong;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllSongs,
  getSongById,
  createSong,
  deleteSongById,
  updateSongById,
};
