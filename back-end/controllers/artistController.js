const express = require("express");
const router = express.Router();

// const songController = require("./songController");

const {
  getAllArtists,
  getArtistById,
  //   createArtist,
  //   deleteArtistById,
  //   updateArtistById,
  getArtistByIdAll,
} = require("../queries/artists");

// router.use("/:artistId/songs", songController);

router.get("/", async (req, res) => {
  const allArtists = await getAllArtists();
  if (Array.isArray(allArtists)) {
    res.json(allArtists);
  } else {
    res.status(500).json({ error: "Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const artist = await getArtistById(req.params.id);

    if (artist.message === "No data returned from query") {
      return res.status(400).json({ error: "Not found" });
    }

    if (artist.length === 0) {
      return res.status(404).json({ error: "id not found" });
    } else {
      return res.status(200).json(artist[0]);
    }
  } catch (e) {
    return res.status(500).json({ error: e });
  }
});

router.get("/:id/songs", async (req, res) => {
  try {
    const artist = await getArtistByIdAll(req.params.id);

    if (artist.message === "No data returned from query") {
      return res.status(400).json({ error: "Not found" });
    }

    if (artist.length === 0) {
      return res.status(404).json({ error: "id not found" });
    } else {
      return res.status(200).json(artist);
    }
  } catch (e) {
    return res.status(500).json({ error: e });
  }
});

// router.post("/", async (req, res) => {
//   try {
//     const artist = await createArtist(req.body);
//     res.json(artist[0]);
//   } catch (e) {
//     res.status(400).json({ error: e });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const deletedArtist = await deleteArtistById(req.params.id);
//     if (deletedArtist.length === 0) {
//       res.status(404).json("Artist not found");
//     } else {
//       res.json(deletedArtist[0]);
//     }
//   } catch (e) {
//     res.status(400).json({ error: e });
//   }
// });

// router.put("/:id", async (req, res) => {
//   try {
//     const updatedArtist = await updateArtistById(req.params.id, req.body);

//     if (updatedArtist.length === 0) {
//       res.status(404).json("The artist is not found");
//     } else {
//       res.status(200).json(updatedArtist[0]);
//     }
//   } catch (e) {
//     res.status(400).json({ error: e });
//   }
// });

module.exports = router;
