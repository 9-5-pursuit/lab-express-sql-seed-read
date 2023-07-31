const express = require("express");
const router = express.Router();

const reviewsController = require("./reviewsController");

router.use("/:bookmarkId/reviews", reviewsController);

const {
  getAllSongs,
  songById,
  createSong,
  deleteSong,
  updateSongById,
} = require("../queries/songs");

const { checkName, checkArtist } = require("../validations/checkSongs");

router.get("/", async (req, res) => {
  const allSongs = await getAllSongs();

  if (Array.isArray(allSongs)) {
    res.json(allSongs);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const song = await songById(id);

  if (bookmark.length === 0) {
    res.status(404).json({ error: "not found" });
  } else {
    res.json(song[0]);
  }
});

router.post("/", checkName, checkArtist, async (req, res) => {
  const createdSong = await createSong(req.body);
  console.log(createSong);
  res.json(createdSong);
});

router.delete("/:id", async (req, res) => {
  const deletedSong = await deleteSong(req.params.id);

  if (deletedSong.length === 0) {
    return res.status(404).json({ message: "No data found!", error: true });
  } else {
    return res.json(deletedSong[0]);
  }
});

router.put("/:id", checkName, checkArtist, async (req, res) => {
  const updatedSong = await updateSongById(req.params.id, req.body);
  console.log(updatedSong);
  if (updatedSong.length === 0) {
    res.status(404).json({ message: "not found!", error: true });
  } else {
    res.json(updatedSong[0]);
  }
});

module.exports = router;
