const db = require("../db/dbConfig");

async function getAllSongsOnArtist(artistId) {
  try {
    const allSongs = await db.any(
      "SELECT * FROM artists WHERE artist_id=$1 ORDER BY id",
      artistId
    );
    return allSongs;
  } catch (error) {
    return error;
  }
}

async function getAllSongs() {
  try {
    const allSongs = await db.any("SELECT * FROM songs ORDER BY id ASC");
    return allSongs;
  } catch (e) {
    return e;
  }
}

async function getSongById(id) {
  try {
    const oneSong = await db.any("SELECT * FROM songs WHERE id=$1", [id]);
    // const oneSong = await db.any(
    //   "SELECT artist_id, songs.name, artists.name, genre FROM songs LEFT JOIN artists ON artists.id = songs.artist_id WHERE artist.id = $1 AND songs.id = $2",
    //   [artistId, songId]
    // );

    if (oneSong) {
      oneSong.is_favorite =
        oneSong.is_favorite === true || oneSong.is_favorite === "true";
    }

    return oneSong;
  } catch (error) {
    return error;
  }
}

async function createSong(song) {
  try {
    const newSong = await db.any(
      // "INSERT INTO songs (name, artist, album, time, is_favorite, artist_id) VALUES ($1, $2, $3, $4, $5) RETURNING *", // ---> Need for merging test
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        song.name,
        song.artist,
        song.album,
        song.time,
        song.is_favorite,
        //song.artist_id,
      ]
    );

    return newSong;
  } catch (error) {
    throw error;
  }
}

async function deleteSongById(id) {
  try {
    const deletedSong = await db.any(
      "DELETE FROM songs WHERE id=$1 RETURNING *",
      id
    );

    return deletedSong;
  } catch (error) {
    return error;
  }
}

async function updateSongById(id, song) {
  try {
    const updatedSong = await db.any(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
      [song.name, song.artist, song.album, song.time, song.is_favorite, id]
    );

    return updatedSong;
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllSongs,
  getSongById,
  createSong,
  deleteSongById,
  updateSongById,
  getAllSongsOnArtist,
};
