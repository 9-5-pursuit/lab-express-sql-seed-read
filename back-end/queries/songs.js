const db = require('../db/dbConfig');

const getAllSongs = async() => {
    try {
        const allSongs = await db.any('SELECT * FROM songs');
        return allSongs;
    } catch (e) { return e }
};
const getSongsOrdered = async(args) => {
    try {
        const orderedSongs = await db.any(`SELECT * FROM songs order by name ${args}`);
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

const delPlaylistRow = async(args, argsb) => {
    try {
        const Del = await db.any(`DELETE FROM ${args} where id = ${argsb} RETURNING *`);
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

const getPlaylist = async(args) => {
    try {
    const newTabl = await db.any(`SELECT * FROM ${args}`);
    return newTabl;
    } catch (e) { return e }
}
const newPlaylist = async(args) => {
    try {
    const newTabl = await db.any(`CREATE TABLE ${args} (id INT PRIMARY KEY, name TEXT, artist TEXT, album TEXT, FOREIGN KEY(id) REFERENCES songs(id))`);
    return newTabl;
    } catch (e) { return e }
}

const newPlaylistItem = async(args) => {
    try {
        const addRow = await db.any(`insert into ${args.name} (id, name, artist, album) SELECT id, name, artist, album
        FROM songs
        WHERE id not in (select id from ${args.name}) and id = $1 RETURNING *`, args.id)
        return addRow
    } catch (e) { return e }
}
module.exports = {
    getAllSongs,
    getSongsOrdered,
    getOneSong,
    makeAlTabl,
    selectAlbums,
    addRow,
    deleteRow,
    getPlaylist,
    delPlaylistRow,
    updateRow,
    newPlaylist,
    newPlaylistItem,
}