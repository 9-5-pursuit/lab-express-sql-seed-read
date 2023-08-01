const db = require("../db/dbConfig")

async function getAllSongs() {
    try {
        const allSongs = await db.any("SELECT * FROM songs")
        return allSongs
    } catch (e) {
        return e
    }
}

async function getSongById(id) {
    try {
        const oneSong = await db.any("SELECT * FROM songs WHERE id=$1", [id])

        return oneSong
    } catch (error) {
        return error
    }
}

async function createSong(song) {
    try {
        const newSong = await db.any("INSERT INTO songs (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *", [song.name, song.artist, song.album, song.time, song.is_favorite])

        return newSong
    } catch (error) {
        throw error
    }
}

async function deleteSongById(id) {
    try {
        const deletedSong = await db.any("DELETE FROM songs WHERE id=$1 RETURNING *", id)
        
        return deletedSong
    } catch (error) {
       return error 
    }
}

async function updateSongById(id, song) {
    try  {
        const updatedSong = await db.any("UPDATE songs SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *", [song.name, song.artist, song.album, song.time, song.is_favorite])

        return updatedSong
    } catch (error) {
        return error
    }
}

module.exports = {getAllSongs, getSongById, createSong, deleteSongById, updateSongById}