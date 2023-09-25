const express = require("express");
const router = express.Router({ mergeParams: true});

const {
  getAllArtists,
  getArtistsById,
  deleteArtistsById,
  createNewArtist,
  updateArtists,
} = require("../queries/artists");

router.get("/", async (req, res) => {

  const allArtists = await getAllArtists();

  if (allArtists.length === 0) {
    res.status(404).json({ error: "not found" });
  } else {
    res.json(allArtists);
  }

});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const artist = await getArtistsById(id);

  if (artist.length === 0) {
    res.status(404).json({ error: "Artist not found" });
  } else {
    res.json(artist[0]);
  }

});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedArtist = await deleteArtistsById(id);

  if (deletedArtist.length === 0) {
    res.status(404).json({ error: "Artist not found" });
  } else {
    res.json(deletedArtist[0]);
  }

});

router.post("/", async (req, res) => {
  const newArtist = await createNewArtist(req.body);

  if (newArtist.length === 0) {
    res.status(400).json({ error: "No artist created" });
  } else {
    res.json(newArtist);
  }

});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedArtist = await updateArtists(id, req.body);

  if (!updatedArtist) {
    res.status(404).json({ error: "Artist not found" });
  } else {
    res.json(updatedArtist);
  }
  
});

module.exports = router;