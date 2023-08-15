const db = require('../db/dbConfig');

const getAllSongsPlaylist = async (songId) => {
    try {
        const allPlaylists = await db.any(`SELECT * FROM playlists where song_id = $1`, songId)
        return allPlaylists
    } catch (error) {
        return error
        
    }
}
const getPlaylistBySongId = async (songId, playistId) => {
    try {
        const songPlaylist = await db.any(
            `SELECT SONG_ID,
            NAME, 
            GENRE
            FROM SONGS
            JOIN PLAYLISTS ON SONGS.ID = PLAYLIST.SONG_ID
            WHERE SONGS.ID = $1
              AND PLAYLISTS.ID = $2;
            `,
            [songId, playistId]
        )
        return songPlaylist;
    } catch (error) {
        return error
    }
}





const createSongsPlaylist = async (playlist) => {
    try {
        const newPlaylist = await db.one(
            `INSERT INTO playlists(song_id, name, genre) VALUES($1, $2, $3) RETURNING *`,
            [
              playlist.song_id,
              playlist.name,
              playlist.genre  
            ]
        );
        return newPlaylist
    } catch (error) {
        return error
    }
}

const deleteSongPlaylist = async (id) => {
    try {
        const deletePlaylistById = await db.any(
            `DELETE FROM playlists WHERE id = $1 RETURNING *`,
            id
        );
        return deletePlaylistById
    } catch (error) {
        return error
    }
}

const updatePlaylist = async (id, playlist) => {
     let { name, genre, song_id } = playlist
    try {
     const updatePlaylistList = await db.any(
        `UPDATE playlists SET name = $1, genre = $2, song_id = $3 WHERE id = $4 RETURNING *`,
        [name, genre, song_id, id]
     )
     return updatePlaylistList
    } catch (error) {
        return error
    }
}
module.exports={
    getAllSongsPlaylist,
    getPlaylistBySongId,
    createSongsPlaylist,
    deleteSongPlaylist,
    updatePlaylist
}