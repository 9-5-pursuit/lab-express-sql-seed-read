const checkNameAndArtist = (req, res, next) => {
  const { name, artist } = req.body;
  if (!name || !artist) {
    res.status(400).json({ error: "Both name and the artist is required" });
  } else {
    next();
  }
};

const checkIsFavorite = (req, res, next) => {
  const { is_favorite } = req.body;
  if (typeof is_favorite !== "boolean") {
    res.status(400).json({ error: "is_favorite should be boolean" });
  } else {
    next();
  }
};

module.exports = { checkNameAndArtist, checkIsFavorite };
