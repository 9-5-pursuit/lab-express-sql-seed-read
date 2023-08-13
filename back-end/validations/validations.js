const checkName = (req, res, next) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ error: "Name is required" });
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

const checkBoolean = (req, res, next) => {
    const { is_favorite } = req.body;
    console.log(is_favorite);
    if (
        typeof is_favorite !== "boolean" &&
        is_favorite !== "false" &&
        is_favorite !== "true"
    ) {
        res.status(400).json({ error: "is_favorite must be a boolean value" });
    } else {
        next();
    }
};
module.exports = { checkName, checkArtist, checkBoolean };
