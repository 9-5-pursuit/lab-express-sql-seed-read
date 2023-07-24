const express = require("express");
const router = express.Router();

const {
  getAllSongs,
  getIndividualSong,
  createSong,
} = require("../queries/songs");

const { checkName } = require("../validations/checkSongs");

router.get("/", async (req, res) => {
  const allSongs = await getAllSongs();

  if (Array.isArray(allSongs)) {
    res.json(allSongs);
  } else {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  const getSong = await getIndividualSong(req.params.id);
  res.json(getSong);
});

router.post("/", checkName, async (req, res) => {
  const createdSong = await createSong(req.body);
  res.json(createdSong);
});
module.exports = router;
