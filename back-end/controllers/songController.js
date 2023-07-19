const express = require("express");
const router = express.Router();
const {
  getAllSongs, getSongById
} = require("../queries/songs");

// INDEX
router.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
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
        res.status(200).json(song[0]);
    }
})

module.exports = router;
