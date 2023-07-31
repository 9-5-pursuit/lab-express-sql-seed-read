const checkName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ error: "Title is required" });
  } else {
    next();
  }
};

const checkArtist = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ error: "Artist is required" });
  }
};

module.exports = { checkName, checkArtist };
