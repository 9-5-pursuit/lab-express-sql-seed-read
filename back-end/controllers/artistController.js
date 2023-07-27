const express = require("express");
const artist = express.Router();

const { getSongsOfArtist } = require("../queries/artist");

artist.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const songs = await getSongsOfArtist(id);
    res.json(songs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = artist;
