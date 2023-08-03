// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const songController = require("./controllers/songController");
// const artistsController = require("./controllers/artistsController");

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(morgan());

// app.use("/songs", songController);
// app.use("/songs/:songsId/artists-songs", artistsController); // Mount artistsController here

// app.get("/", (req, res) => {
//   res.send("Welcome to Tuner");
// });

// app.get("*", (req, res) => {
//   res.status(404).send("Page is not found");
// });

// module.exports = app;

// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const songController = require("./controllers/songController");
// const artistsController = require("./controllers/artistsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan());

// ROUTES
app.use("/songs", songController);
// app.use("/songs/:songsId/artists-songs", artistsController);

app.get("/", (req, res) => {
  res.send("Welcome to Tuner");
});

app.get("*", (req, res) => {
  res.status(404).send("Page is not found");
});

// EXPORT
module.exports = app;
