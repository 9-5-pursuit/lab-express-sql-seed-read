const db = require("../db/dbConfig.js");

const getAllSongs = async () => {
  try {
    // db.any() means it will accept any return from the database, no rows, one row, or many rows of data.
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSongs,
};