const db = require('../db/dbConfig');

const getAllSongs = async() => {
    try {
        const allSongs = await db.any('SELECT * FROM songs');
        return allSongs;
    } catch (e) { return e }
};
const getOneSong = async(args) => {
    try {
        const Song = await db.any(`SELECT * FROM songs where id = ${args}`);
        return Song;
    } catch (e) { return e }
};

const addRow = async(args) => {
    try {
        const Row = await db.any(`INSERT INTO songs (name, artist, album, time, is_favorite) 
        VALUES ('${args[0]}','${args[1]}','${args[2]}','${args[3]}',${args[4]}) RETURNING *`);
        return Row;
    } catch (e) { return e }
};

const deleteRow = async(args) => {
    try {
        const Del = await db.any(`DELETE FROM songs where id = ${args} RETURNING *`);
        return Del;
    } catch (e) { return e }
};

const updateRow = async(args, argsb) => {
    try {
        const Updated = await db.any(`UPDATE songs SET name = '${args[0]}', artist = '${args[1]}', album = '${args[2]}'
        , time = '${args[3]}', is_favorite = ${args[4]} WHERE id = ${args} RETURNING *`);
        return Updated;
    } catch (e) { return e }
};

module.exports = {
    getAllSongs,
    getOneSong,
    addRow,
    deleteRow,
    updateRow,
}