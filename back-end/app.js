const express = require("express");
const app = express();
const cors = require("cors");
const songsController = require("./controllers/songController");
const artistController = require("./controllers/artistController");
const albumController = require("./controllers/albumController");
const deezer = require("./db/deezer");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.get("/deezer", async (req, res) => {
  console.log(deezer);
  const deezerData = await deezer();
  let result = [];
  for (let item of deezerData) {
    const obj = {
      name: item.title,
      artist: item.artist.name,
      album: item.album.title,
      time: item.duration,
      picture: item.album.cover_big,
      preview: item.preview,
      is_favorite: Math.random() > 0.5,
      artist_id: 3,
      album_id: 3,
    };
    result.push(obj);
  }
  // console.log("deezerData", deezerData);

  // result = result.filter((song) => song.album === "Midnights");
  // res.json(deezerData);
  res.json(result);
});

app.use("/songs", songsController);
app.use("/artists", artistController);
app.use("/albums", albumController);

app.use("*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
