const express = require("express");
const router = express.Router();
const {
  getAllSongs,
  getSongById,
  createNewSong,
  deleteSongById,
  updateSong,
} = require("../queries/songs");
const {
  checkName,
  checkBoolean,
  checkArtist,
} = require("../validations/checkSongs");

router.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (Array.isArray(allSongs)) {
    res.json(allSongs);
  } else {
    res.status(404).json({ error: "server error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSongById(id);
  if (song.length === 0) {
    res.status(404).json({ error: "Song not found" });
  } else {
    res.json(song[0]);
  }
});

router.post("/", checkArtist, checkName, checkBoolean, async (req, res) => {
  const newSong = await createNewSong(req.body);
  if (newSong.length === 0) {
    res.status(400).json({ error: "No song created" });
  } else {
    res.json(newSong);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSongById(id);

  if (deletedSong.length === 0) {
    res.status(404).json({ error: "Song not found" });
  } else {
    res.json(deletedSong[0]);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);

  if (!updatedSong) {
    res.status(404).json({ error: "Song not found" });
  } else {
    res.json(updatedSong);
  }
});

module.exports = router;
