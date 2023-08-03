const db = require("../db/dbConfig");

const getArtistSongs = async (artistId) => {
  try {
    const getSongsFromArtist = await db.any(
      "SELECT * FROM songs WHERE artist_id = $1",
      artistId
    );
    return getSongsFromArtist;
  } catch (error) {
    return error;
  }
};
module.exports = { getArtistSongs };
