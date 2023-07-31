const checkName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ error: "Name is required" });
  } else {
    next();
  }
};

const checkArtist = (req, res, next) => {
  if (!req.body.artist) {
    res.status(400).json({ error: "Artist is required" });
  } else {
    next();
  }
};

const checkAlbum = (req, res, next) => {
  if (!req.body.album) {
    res.status(400).json({ error: "Album is required" });
  } else {
    next();
  }
};

const checkTime = (req, res, next) => {
  if (!req.body.time) {
    res.status(400).json({ error: "Time is required" });
  } else {
    next();
  }
};

const checkBoolean = (req, res, next) => {
  if (typeof req.body.is_favorite !== "boolean") {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  } else {
    next();
  }
};

module.exports = {
  checkName,
  checkArtist,
  checkBoolean,
  checkAlbum,
  checkTime,
};
