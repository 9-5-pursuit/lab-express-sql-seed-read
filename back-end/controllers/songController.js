const express = require("express");
const router = express.Router();
const {
    getAllSongs,
    getSingleSong,
    createSong,
    deleteSong,
    updateSong,
    getAllArtistsOnSong,
} = require("../queries/songs");
const {
    checkName,
    checkArtist,
    checkBoolean,
} = require("../validations/validations");

router.get("/", async (req, res) => {
    const allSongs = await getAllSongs();
    res.json(allSongs);
});

router.get("/:id", async (req, res) => {
    const id = req.params.id;

    const song = await getSingleSong(id);

    if (song.length) {
        res.json(song[0]);
    } else {
        res.status(404).json({
            status: false,
            message: "Song does not exist",
        });
    }
});
router.get("/artists/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const allSongs = await getAllArtistsOnSong(id);
    res.json(allSongs);
});
router.post("/", checkName, checkArtist, checkBoolean, async (req, res) => {
    const newSong = req.body;
    const insertSong = await createSong(newSong);
    if (insertSong.length === 0) {
        res.status(400).json({
            status: false,
            message: "You cannot create an empty song",
        });
    } else {
        res.json(insertSong);
    }
});
router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    const deletedSong = await deleteSong(id);

    if (deletedSong.length === 0) {
        res.status(404).json({ message: "No data found!", error: true });
    } else {
        res.json(deletedSong[0]);
    }
});
router.put("/:id", async (req, res) => {
    const updatedSong = await updateSong(req.body, req.params.id);
    console.log(updatedSong);
    if (updatedSong.length === 0) {
        res.status(404).json({ message: "No data found!", error: true });
    } else {
        res.json(updatedSong[0]);
    }
});
module.exports = router;
