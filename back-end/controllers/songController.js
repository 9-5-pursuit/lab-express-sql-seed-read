const express = require("express");
const router = express.Router();
const {
  getAllSongs,
  getSongById,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

const {
  checkName,
  checkArtist,
  checkisFavorite,
} = require("../validations/checkSongs");

//get all songs
router.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  try {
    if (allSongs[0]) {
      res.status(200).json(allSongs);
    } else {
      res.status(500).json({ error: "server error" });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//get individual song
router.get("/:id", async (req, res) => {
  try {
    const song = await getSongById(req.params.id);

    // if (song.message === "No data returned from the query.") {
    //   return res.status(404).json({ error: "not found" });
    // }

    if (!song || song.length === 0) {
      res.status(404).json({ error: "not found" });
    } else {
      res.status(200).json(song[0]);
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

//create a new song
router.post("/", checkName, checkArtist, checkisFavorite, async (req, res) => {
  try {
    //console.log(req.body);
    const song = await createSong(req.body);
    //console.log(song);
    res.status(200).json(song[0]);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
// delete a song
router.delete("/:id", async (req, res) => {
  try {
    const deletedSong = await deleteSong(req.params.id);

    if (deletedSong.length === 0) {
      res.status(404).json("Song not found");
    } else {
      res.status(200).json(deletedSong[0]);
    }
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//update a song
router.put(
  "/:id",
  checkName,
  checkArtist,
  checkisFavorite,
  async (req, res) => {
    try {
      const updatedSong = await updateSong(req.params.id, req.body);

      if (updatedSong.length === 0) {
        res.status(404).json("Song not found");
      } else {
        res.status(200).json(updatedSong[0]);
      }
    } catch (error) {
      res.status(400).json({ error: error });
    }
  }
);

module.exports = router;
