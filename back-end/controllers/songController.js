const express = require("express");
const router = express.Router();

const {
  getAllSongs,
  getSongById,
  createSong,
  deleteSong,
  updateSongById,
} = require("../queries/songs");

const { checkName, checkBoolean } = require("../validations/checkSongs");

//INDEX
router.get("/", async (req, res) => {
  const allSongs = await getAllSongs();

  if (!allSongs) {
    res.status(500).json({ error: "Server error" });
  } else {
    res.status(200).json(allSongs);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const songById = await getSongById(id);

  if (songById.length === 0) {
    res.redirect("/*");
    // res.status(500).json({ error: "Server error" });
  } else {
    res.status(200).json(songById);
  }
});

router.post("/", checkName, checkBoolean, async (req, res) => {
  const newCreatedSong = await createSong(req.body);
  res.json(newCreatedSong);
});

router.delete("/:id", async (req, res) => {
  const deletedSong = await deleteSong(req.params.id);

  if (deletedSong.length === 0) {
    return res.status(404).json({ message: "No data found!", error: true });
  } else {
    return res.json(deletedSong[0]);
  }
});

router.put("/:id", checkName, checkBoolean, async (req, res) => {
  const updatedSong = await updateSongById(req.params.id, req.body);
  console.log(updatedSong);

  if (updatedSong.length === 0) {
    if (updatedSong.length === 0) {
      res.status(404).json({ message: "not found!", error: true });
    } else {
      res.json(updatedSong[0]);
    }
  }
});

module.exports = router;
