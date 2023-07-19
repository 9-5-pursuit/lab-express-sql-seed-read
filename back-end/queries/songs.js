const db = require('../db/dbConfig');

const getAllSongs = async() => {
    try {
        const allSongs = await db.any('SELECT * FROM songs');
        return allSongs;
    } catch (e) { return e }
};
const getSongsOrdered = async(args) => {
    try {
        const orderedSongs = await db.any(`SELECT * FROM songs order by name $1`, args);
        return orderedSongs;
    } catch (e) { return e }
};
const getOneSong = async(args) => {
    try {
        const Song = await db.any(`SELECT * FROM songs where id = $1`, args);
        return Song;
    } catch (e) { return e }
};

const makeAlTabl = async(args, argsb) => {
    try {
        const newT = await db.any(`SELECT * FROM songs WHERE album = $1 and artist = $2`, [args, argsb])
        return newT
    } catch(e){ return e }
}
const selectAlbums = async() => {
    try {
        const albums = await db.any(`SELECT distinct album, artist from songs`)
        return albums
    } catch(e){ return e }
}

const addRow = async(args) => {
    try {
        const Row = await db.any(`INSERT INTO songs (name, artist, album, time, is_favorite) 
        VALUES ($1,$2,$3,$4,$5) RETURNING *`, [args[0], args[1]
        ,args[2], args[3], args[4]]);
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
        const Updated = await db.any(`UPDATE songs SET name = $1, artist = $2, album = $3
        , time = $4, is_favorite = $5 WHERE id = $6 RETURNING *`, [argsb[0],argsb[1],argsb[2],argsb[3],argsb[4], args]);
        return Updated;
    } catch (e) { return e }
};

module.exports = {
    getAllSongs,
    getSongsOrdered,
    getOneSong,
    makeAlTabl,
    selectAlbums,
    addRow,
    deleteRow,
    updateRow,
}