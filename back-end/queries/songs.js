const db = require("../db/dbConfig");

async function getAllSongs() {
  try {
    const allSongs = await db.any("SELECT * FROM songs");
    return allSongs;
  } catch (error) {
    console.log(error);
  }
}

async function getOneSong(id) {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    console.log(error);
  }
}

async function getAlbumId(album) {
  try {
    let albumId = await db.oneOrNone(
      "SELECT id FROM albums WHERE LOWER(name) = LOWER($1)",
      album
    );
    if (!albumId) {
      albumId = await db.one(
        "INSERT INTO albums(name) VALUES($1) RETURNING id",
        album
      );
    }
    console.log("album id", albumId);
    return albumId.id;
  } catch (error) {
    console.log(error);
  }
}

async function getArtistId(artist) {
  try {
    let artistId = await db.oneOrNone(
      "SELECT id FROM artists WHERE LOWER(name) = LOWER($1)",
      artist
    );
    if (!artistId) {
      artistId = await db.one(
        "INSERT INTO artists(name) VALUES($1) RETURNING id",
        artist
      );
    }
    console.log("art id", artistId);

    return artistId.id;
  } catch (error) {
    console.log(error);
  }
}

async function createSong(song) {
  try {
    const artistId = await getArtistId(song.artist);
    const albumId = await getAlbumId(song.album);

    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite, artist_id,album_id)  VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [
        song.name,
        song.artist,
        song.album,
        song.time,
        song.is_favorite,
        artistId,
        albumId,
      ]
    );
    console.log("new songs", newSong);
    return newSong;
  } catch (error) {
    console.log(error);
  }
}

async function deleteSong(id) {
  try {
    const deletedSong = await db.one(
      "DELETE FROM songs WHERE id = $1 RETURNING *",
      id
    );
    console.log(deletedSong);
    return deletedSong;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function updateSong(id, song) {
  const { name, artist, album, time, is_favorite } = song;
  try {
    const artistId = await getArtistId(song.artist);
    const albumId = await getAlbumId(song.album);

    const updatedSong = await db.one(
      "UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5, artist_id = $6, album_id =$7 WHERE id=$8 RETURNING *",
      [name, artist, album, time, is_favorite, artistId, albumId, id]
    );
    return updatedSong;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong,
};
