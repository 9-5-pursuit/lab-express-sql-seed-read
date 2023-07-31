const checkName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ error: "Name is required" });
  } else {
    next();
  }
};

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;

  if (typeof is_favorite !== "boolean") {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  } else {
    next();
  }
};

const checkArtist = (req, res, next) => {
  const { artist } = req.body;
  if (!artist) {
    res.status(400).json({ error: "Artist is required" });
  } else {
    next();
  }
};

module.exports = { checkName, checkBoolean, checkArtist };
