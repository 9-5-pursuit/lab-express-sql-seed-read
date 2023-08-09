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
  if (
    req.body.is_favorite === "true" ||
    req.body.is_favorite === true ||
    req.body.is_favorite === false
  ) {
    req.body.is_favorite = Boolean(req.body.is_favorite);
    next();
  } else if (req.body.is_favorite === "false") {
    req.body.is_favorite = false;
    next();
  } else {
    res.status(400).json({ error: "is_favorite must be a boolean" });
  }
};

module.exports = { checkName, checkArtist, checkBoolean };
