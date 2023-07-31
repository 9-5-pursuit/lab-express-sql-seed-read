const db = require("../db/dbConfig.js");

const getAllArtists = async () => {
  try {
    const allArtistss = await db.any("SELECT * FROM artists");
    return allArtistss;
  } catch (error) {
    return {
      status: "Error",
      message: error.message,
    };
  }
};

const getArtistsById = async (id) => {
  try {
    const artists = await db.any("SELECT * FROM artists WHERE id=$1", id);
    return artists;
  } catch (error) {
    return {
      status: "Error",
      message: error.message,
    };
  }
};

const createNewArtist = async (artist) => {
  try {
    const newArtist = await db.one(
      "INSERT INTO artists (name) VALUES($1) RETURNING *",
      [artist.name]
    );
    return newArtist;
  } catch (error) {
    return {
      status: "Error",
      message: error.message,
    };
  }
};

const deleteArtistsById = async (id) => {
  try {
    const deletedArtists = await db.any(
      "DELETE FROM artists WHERE id=$1 RETURNING *",
      id
    );
    return deletedArtists;
  } catch (error) {
    return {
      status: "Error",
      message: error.message,
    };
  }
};

const updateArtists = async (id, artist) => {
  try {
    const updatedArtist = await db.one(
      "UPDATE artists SET name = $1 WHERE id = $2 RETURNING *",
      [artist.name, id]
    );
    return updatedArtist;
  } catch (error) {
    return { status: "Error", message: error.message };
  }
};


module.exports = {
  getAllArtists,
  getArtistsById,
  createNewArtist,
  deleteArtistsById,
  updateArtists,
};
