const checkName = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).json({ error: "Name is required" });
  }
  next();
};

const checkArtist = (req, res, next) => {
  if (!req.body.artist) {
    return res.status(400).json({ error: "Artist is required" });
  }
  next();
};

const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;

  if (typeof is_favorite !== "boolean") {
    return res
      .status(400)
      .json({ error: "is_favorite must be a boolean value" });
  }
  next();
};

module.exports = { checkName, checkArtist, checkBoolean };
