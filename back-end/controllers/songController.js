const express = require("express");
const router = express.Router();

const albumController = require("./albumController")

const {
  getAllSongs,
  songById,
  createSong,
  deleteSong,
  updateById,
} = require("../queries/songs");

const { checkRequest } = require("../validations/checkSongs");

router.use("/:songId/albums", albumController);

router.get("/", async (req, res) => {
  const allSongs = await getAllSongs();

  if (Array.isArray(allSongs)) {
    res.json(allSongs);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const song = await songById(id);

  if (song.length !== 0) {
    res.json(song[0]);
  } else {
    res.status(404).json({ error: error });
  }
});

router.post("/", checkRequest, async (req, res) => {
  const newSong = await createSong(req.body);
console.log(newSong)
  res.json(newSong);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const deletedSong = await deleteSong(id);

  if (deletedSong) {
    return res.json(deletedSong);
  } else {
    return res.status(404).json({ error: true, message: "No data found!" });
  }
});

router.put("/:id", checkRequest, async (req, res) => {
  const id = req.params.id;
  const song = req.body;

  const updatedSong = await updateById(id, song);

  if (updatedSong) {
    return res.json(updatedSong);
  } else {
    return res.status(404).json({ error: true, message: "Update not found!" });
  }
});

module.exports = router;
