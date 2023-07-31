const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const songsConroller = require("./controllers/songsController");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (rea, res) => {
  res.send("Welcome to Songs App");
});

app.use("/songs", songsConroller);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
