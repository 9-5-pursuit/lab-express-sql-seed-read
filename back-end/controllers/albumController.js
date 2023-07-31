const express = require("express");
const { getSongsFromAlbum } = require("../queries/albums");
const album = express.Router();

album.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const songs = await getSongsFromAlbum(id);
    res.json(songs);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = album;
