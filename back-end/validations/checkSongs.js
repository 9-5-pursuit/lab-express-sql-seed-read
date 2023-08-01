const checkName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ error: "Name is required" });
  } else if (!req.body.artist) {
    res.status(400).json({ error: "Arist is required" });
  } else next();
};

// Checks if is_favorite is a boolean.
const checkBoolean = (req, res, next) => {
  const { is_favorite } = req.body;

  if (typeof is_favorite !== "boolean") {
    res.status(400).json({ error: "is_favorite must be a boolean value" });
  } else {
    next();
  }
};

module.exports = { checkName, checkBoolean };
