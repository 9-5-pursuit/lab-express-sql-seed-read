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

const checkBoolean = (req, res, next) => {
  const isFavoriteValue = req.body.is_favorite;

  if (typeof isFavoriteValue === "string") {
    if (isFavoriteValue !== "true" && isFavoriteValue !== "false") {
      res.status(400).json({ error: "is_favorite must be a boolean value" });
      return;
    }
    req.body.is_favorite = isFavoriteValue === "true";
  } else if (typeof isFavoriteValue !== "boolean") {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
    return;
  }

  next();
};

module.exports = { checkBoolean, checkName, checkArtist };