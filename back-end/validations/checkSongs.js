const checkName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).json({ error: "Name is required" });
  } else {
    next();
  }
};

module.exports = {
  checkName,
};
