const express = require("express");
const router = express.Router();

const {
  getAllSongs,
  getSongById,
  createSong,
  deleteSongById,
  updateSongById,
} = require("../queries/songs");

const {
  checkNameAndArtist,
  checkIsFavorite,
} = require("../queries/validations/checkSong");

router.get("/", async (req, res) => {
  const songsList = await getAllSongs();
  res.json(songsList);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const songById = await getSongById(id);
  if (songById.length === 0) {
    res.status(404).json({ error: "The song doesnot exist" });
  } else {
    res.json(songById[0]);
  }
});

router.post("/", checkNameAndArtist, checkIsFavorite, async (req, res) => {
  const newSong = await createSong(req.body);
  res.json(newSong);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const removeSong = await deleteSongById(id);
  if (removeSong === null) {
    res.status(404).json({ error: "The song doesnot exist" });
  } else {
    res.json(removeSong);
  }
});

router.put("/:id", checkNameAndArtist, checkIsFavorite, async (req, res) => {
  const { id } = req.params;
  const updateSong = await updateSongById(req.body, id);
  if (updateSong.length === 0) {
    res.status(404).json({ error: "Song not found!" });
  } else {
    res.json(updateSong[0]);
  }
});

module.exports = router;
