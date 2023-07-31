const express = require("express");
const {
  getAllSongs,
  getSongById,
  createNewSong,
  deleteSongById,
  updateSong,
  getAllSongsAsc,
  getAllSongsDesc,
  getAllFavoriteSongs,
  getAllNonFavoriteSongs,
  getAllSongsOnArtistId,
} = require("../queries/songs");
const {
  checkName,
  checkBoolean,
  checkArtist,
} = require("../validations/checkSongs");

const router = express.Router();

router.get("/", async (req, res) => {
  const { order, is_favorite } = req.query;

  let allSongs;

  if (order === "asc") {
    allSongs = await getAllSongsAsc();
  } else if (order === "desc") {
    allSongs = await getAllSongsDesc();
  } else if (is_favorite === "true") {
    allSongs = await getAllFavoriteSongs();
  } else if (is_favorite === "false") {
    allSongs = await getAllNonFavoriteSongs();
  } else {
    allSongs = await getAllSongs();
  }

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

router.get("/:artistId/get-all-songs", async (req, res) => {
  const { artistId } = req.params;
  try {
    const allSongsById = await getAllSongsOnArtistId(artistId);

    if (allSongsById.length === 0) {
      return res.status(404).json({ error: "Artist not found" });
    } else {
      return res.json(allSongsById);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
