const express = require("express");
const router = express.Router({ mergeParams: true });
// const router = express.Router();

const { getArtistSongs } = require("../queries/artists");

// what is the desired result? =>

// why do i need artist_id? =>
// what should the route look like and why? =>
// what is the purpose of having artists? => i want to be able to show all songs related to the aritst

router.get("/", async (req, res) => {
  const artist = await getArtistSongs(req.params.artistId);
  // res.send(req.params.artistId);
  res.json(artist);
  // res.json(req.params);
});

module.exports = router;
