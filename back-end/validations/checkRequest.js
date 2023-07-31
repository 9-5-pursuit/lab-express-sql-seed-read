const checkRequest = (req, res, next) => {
  const { name, artist, is_favorite } = req.body;

  if (!name && !artist && typeof is_favorite !== "boolean") {
    next();
  } else {
    res.status(404).json({ error: "Please check the requirement!" });
  }
};

module.exports = {
  checkRequest,
};
