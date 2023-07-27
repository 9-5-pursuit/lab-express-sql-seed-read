const db = require("../db/dbConfig");

async function getSongsOfArtist(id) {
  const songs = await db.any("SELECT * FROM songs WHERE artist_id = $1", id);
  return songs;
}

module.exports = { getSongsOfArtist };
