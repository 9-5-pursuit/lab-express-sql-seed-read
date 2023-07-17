const db = require('../db/dbConfig');

const getAllSongs = async() => {
    try {
        const allSongs = await db.any('SELECT * FROM songs');
        return allSongs;
    } catch (e) { return e }
};

module.exports = {
    getAllSongs,
}