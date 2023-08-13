const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

const songsController = require("./controllers/songController");
const artist = require("./controllers/artistsController");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/songs", songsController);
app.use("/artists", artist);

app.get("/", (req, res) => {
    res.send("Welcome to Tuner");
});

// 404 PAGE
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

module.exports = app;
