const express = require("express");

const {
  checkName,
  checkArtist,
  checkBoolean,
} = require("../validations/checkSongs");
const {
  getAllSongs,
  getSongById,
  createSong,
  deleteSongById,
  updateSongById,
  getAllSongsOnArtist,
} = require("../queries/songs");

const router = express.Router({ mergeParams: true });

//Index
//Get all songs, and also gets songs based on query for ASC/DESC order
//and also get all songs based on when query is_favorite
//is true or when is_favorite is false
router.get("/", async (req, res) => {
  const order = req.query.order;
  const isFavorite = req.query.is_favorite;

  let allSongs = await getAllSongs(req.params.artistId);
  //Get all songs by query ascending or descending order
  if (order === "asc") {
    allSongs.sort((a, b) => a.name.localeCompare(b.name));
  } else if (order === "desc") {
    allSongs.sort((a, b) => b.name.localeCompare(a.name));
  }
  //Get all songs by query if is_favorite is true VS all songs by query when is_favorite is false
  if (isFavorite === "true") {
    allSongs = allSongs.filter((song) => song.is_favorite === true);
  } else if (isFavorite === "false") {
    allSongs = allSongs.filter((song) => song.is_favorite === false);
  }

  if (!allSongs) {
    res.status(500).json({ error: "Server Error" });
  } else {
    res.json(allSongs);
  }
});

//Get song by id
router.get("/:id", async (req, res) => {
  console.log(req.params);
  try {
    const song = await getSongById(req.params.id);

    if (song.message === "No data returned from the query.") {
      return res.status(400).json({ error: "Not found" });
    }

    if (!song || song.length === 0) {
      return res.status(404).json({ error: "id not found" });
    } else {
      return res.status(200).json(song[0]);
    }
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

//Create song
router.post("/", checkName, checkArtist, checkBoolean, async (req, res) => {
  try {
    // req.body.is_favorite = req.body.is_favorite === "true";
    const song = await createSong(req.body);
    res.json(song[0]);
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

//Delete song by id
router.delete("/:id", async (req, res) => {
  try {
    const deletedSong = await deleteSongById(req.params.id);
    if (deletedSong.length === 0) {
      res.status(404).json("Song not found");
    } else {
      res.json(deletedSong[0]);
    }
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

//Update song by id
router.put("/:id", checkName, checkArtist, checkBoolean, async (req, res) => {
  try {
    const updatedSong = await updateSongById(req.params.id, req.body);

    if (updatedSong.length === 0) {
      res.status(404).json("The song is not found");
    } else {
      res.status(200).json(updatedSong[0]);
    }
  } catch (e) {
    res.status(400).json({ error: e });
  }
});

//Get all songs by an artist
router.get("/:artistId", async (req, res) => {
  try {
    const allSongsByArtist = await getAllSongsOnArtist(req.params.artistId);

    if (allSongsByArtist.length === 0) {
      return res.status(404).json({ error: "Song not Found" });
    } else {
      return res.json(allSongsByArtist[0]);
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
