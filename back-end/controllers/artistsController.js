const express = require("express");
const router = express.Router();
const { getAllArtistsOnSong } = require("../queries/songs");
console.log("test");
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    console.log(id);
    const allSongs = await getAllArtistsOnSong(id);
    res.json(allSongs);
});
router.get("/", async (req, res) => {
    //const allSongs = await getAllSongs();
    res.json({ message: "test" });
});

module.exports = router;
