const checkName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ error: "Song name is required" });
  } else {
    next();
  }
};

const checkArtist = (req, res, next) => {
  if (!req.body.artist) {
    res.status(400).json({ error: "Artist name is required" });
  } else {
    next();
  }
};

const checkBoolean = (req, res, next) => {
  if (typeof req.body.is_favorite !== "boolean") {
    res.status(400).json({ error: "is_favorite must be a boolean" });
  } else {
    next();
  }
};


module.exports = { checkName, checkArtist, checkBoolean };
