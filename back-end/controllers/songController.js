const express = require("express");
const router = express.Router();

const {
  getAllSongs,
  getIndividualSong,
  createSong,
  updateSong,
  deleteSong,
} = require("../queries/songs");

const {
  checkName,
  checkIsFavorite,
  checkArtist,
} = require("../validations/checkSongs");

router.get("/", async (req, res) => {
  try {
    const allSongs = await getAllSongs();

    if (Array.isArray(allSongs)) {
      res.json(allSongs);
    }
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const getSong = await getIndividualSong(req.params.id);
    res.json(getSong);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.post("/", checkName, checkArtist, checkIsFavorite, async (req, res) => {
  try {
    const createdSong = await createSong(req.body);

    let { is_favorite } = req.body;

    if (is_favorite === "true") {
      is_favorite = true;
    } else if (is_favorite === "false") {
      is_favorite = false;
    }

    res.json(createdSong);
  } catch (error) {
    res.status(error.status).json({ error: error.message });
  }
});

router.put(
  "/:id",
  checkName,
  checkArtist,
  checkIsFavorite,
  async (req, res) => {
    try {
      const updatedSong = await updateSong(req.params.id, req.body);
      res.json(updatedSong);
    } catch (error) {
      res.status(error.status).json({ error: error.message });
    }
  }
);

router.delete("/:id", async (req, res) => {
  try {
    const deletedSong = await deleteSong(req.params.id);
    res.json(deletedSong);
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
});
module.exports = router;
