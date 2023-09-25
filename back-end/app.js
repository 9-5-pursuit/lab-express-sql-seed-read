const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const songController = require("./controllers/songController");
const artistController = require("./controllers/artistController");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/songs", songController);
app.use("/artists", artistController);

app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.get("/songs", (req,res) => {
    res.send(songController)
})

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;