const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

const songController = require("./controllers/songController.js");

app.get("/", (req, res) => {
  res.send(`Welcome to Tuner`);
});

app.use("/songs", songController);

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
