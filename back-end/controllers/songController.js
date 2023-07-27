const express = require("express");
const songs = express.Router();
const { checkName, checkBoolean } = require("../validations/checkSongs");
const orderSongsBy = require("../utils/orderSongsBy");
const {
  getAllSongs,
  getOneSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

songs.get("/", async (req, res) => {
  let allSongs = await getAllSongs();
  const { order, is_favorite } = req.query;
  const sortedAllSongs = orderSongsBy(allSongs, order, is_favorite);
  res.json(sortedAllSongs);
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneSong = await getOneSong(id);
  if (oneSong) {
    res.json(oneSong);
  } else {
    res.status(404).json({ error: "Not Found!" });
  }
});

songs.post("/", checkName, checkBoolean, async (req, res) => {
  console.log("req.body", req.body);
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    console.log(error);
  }
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  console.log("deletedSong", deletedSong);
  if (deletedSong.id) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json("Song not found.");
  }
});

songs.put("/:id", checkName, checkBoolean, async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  res.status(200).json(updatedSong);
});

module.exports = songs;
