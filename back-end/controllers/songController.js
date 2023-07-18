const express = require("express");
const router = express.Router();
const {
  getAllSongs,
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

module.exports = router;
