const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const songsController = require("./controllers/songController.js");

const app = express();

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// SONGS ROUTE
app.use("/songs", songsController);

//ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.get("/*", (req, res) => {
  res.status(404).send("Page not found!");
});

module.exports = app;
