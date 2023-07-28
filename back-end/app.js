// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const songController = require("./controllers/songController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan());

// ROUTES
app.use("/songs", songController);

app.get("/", (req, res) => {
  res.send("Welcome to Tuner App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
