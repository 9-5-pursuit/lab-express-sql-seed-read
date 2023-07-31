const express = require("express");
const router = express.Router();
const {
  getAllSongs,
  getSongById,
  createSong,
  deleteSongById,
  updateSong,
} = require("../queries/songs");

const {
  checkName,
  checkArtist,
  checkBoolean,
  checkAlbum,
  checkTime,
} = require("../validations/checkSongs");

router.get("/", async (req, res) => {
  try {
    const allSongs = await getAllSongs();
    if (!allSongs) {
      res.status(500).json({ error: "server error" });
    } else {
      res.status(200).json(allSongs);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const song = await getSongById(req.params.id);

    if (!song || song.length === 0) {
      res.status(404).json({ error: "not found" });
    } else {
      res.json(song[0]);
    }
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/", checkName, checkArtist, checkBoolean, async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedSong = await deleteSongById(req.params.id);

    if (deletedSong.length === 0) {
      res.status(404).json("Song not found");
    } else {
      res.json(deletedSong[0]);
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

router.put(
  "/:id",
  checkName,
  checkBoolean,
  checkAlbum,
  checkArtist,
  checkTime,
  async (req, res) => {
    try {
      const updatedSong = await updateSong(req.params.id, req.body);

      if (updatedSong.length === 0) {
        res.status(404).json("Song not found");
      } else {
        res.json(updatedSong[0]);
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
);

module.exports = router;
