const db = require("../db/dbConfig");

const getAllSongs = async () => {
    try {
        const allSongs = await db.any(`SELECT * FROM songs`);
        return allSongs
    } catch (e) {
        return e;
    }
}

const getSongById = async (id) => {
    try {
        const oneSong = await db.any("SELECT * FROM songs WHERE id = $1",id);
        console.log(oneSong)
        return oneSong
    } catch (e) {
        return e
    }
}
const createSongId = async (song) => {
    try {
        const newSong = await db.one(
            "INSERT INTO songs(title, artist, album, time, is_favorite) VALUES($1, $2, $3, $4, $5) RETURNING *",
            [song.title, song.artist, song.album, song.time, song.is_favorite]);
            return newSong
    } catch (e) {
        return e
    }
}
const deleteSongById = async (id) => {
    try {
        const deletedSong = await db.any( "DELETE FROM songs WHERE ID = $1 RETURNING *",id )
        return deletedSong
    } catch (e) {
        return e
        
    }
}
const updateSongById = async (id, song) => {
    try {
       const updatedSong = await db.any ("UPDATE songs SET title = $1, artist = $2, album=$3, time=$4, is_favorite=$5 WHERE id =$6 RETURNING *",
       [song.title, song.artist, song.album, song.time, song.is_favorite, id])
       return updatedSong
    } catch (e) {
        return e
        
    }
}
module.exports={
    getAllSongs,
    getSongById,
    createSongId,
    deleteSongById,
    updateSongById
}