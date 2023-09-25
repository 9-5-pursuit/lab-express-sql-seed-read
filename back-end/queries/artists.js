const db = require("../db/dbConfig");

async function getAllArtists() {
  try {

    const allArtists = await db.any("SELECT * FROM artists");

    return allArtists;

  } catch (e) {
    return e;
  }
}

async function getArtistById(id) {
  try {

    const oneArtist = await db.any("SELECT * FROM artists WHERE id=$1", [id]);

    return oneArtist;

  } catch (error) {
    return error;
  }
}

async function getArtistByIdAll(id) {
  try {

    const oneArtist = await db.any(
      "SELECT s.*,a.genre FROM songs s JOIN artists a ON s.artist_id = a.id WHERE s.artist_id=$1",
      [id]
    );

    return oneArtist;
  } catch (error) {
    return error;
  }
}

async function createArtist(artist) {
  try {

    const newArtist = await db.any(
      "INSERT INTO artists (name, genre) VALUES ($1, $2) RETURNING *",
      [artist.name, artist.genre]
    );

    return newArtist;
  } catch (error) {
    throw error;
  }
}

async function deleteArtistById(id) {
  try {

    const deletedArtist = await db.any(
      "DELETE FROM artists WHERE id=$1 RETURNING *",
      id
    );

    return deletedArtist;

  } catch (error) {
    return error;
  }
}

async function updateArtistById(id, artist) {
  try {

    const updatedArtist = await db.any(
      "UPDATE artists SET name=$1, genre=$2 WHERE id=$3 RETURNING *",
      [artist.name, artist.genre, id]
    );

    return updatedArtist;
    
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllArtists,
  getArtistById,
  createArtist,
  deleteArtistById,
  updateArtistById,
  getArtistByIdAll,
};