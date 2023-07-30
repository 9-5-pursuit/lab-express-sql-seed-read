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
const checkisFavorite = (req, res, next) => {
  if (typeof req.body.is_favorite !== "boolean") {
    res.status(400).json({ error: "is_favorite is required" });
  } else {
    next();
  }
};

// const checkAll = (req, res, next) => {
//   console.log(req.body);
// };

module.exports = { checkName, checkArtist, checkisFavorite };
