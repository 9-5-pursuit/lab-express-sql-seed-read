const db = require("../db/dbConfig");

const getAllSongs = async () => {
    try {
        const allSongs = await db.any("SELECT * FROM songs");
        return allSongs;
    } catch (error) {
        return error;
    }
};
const getSingleSong = async (id) => {
    try {
        const allSongs = await db.any("SELECT * FROM songs WHERE id = $1", id);
        return allSongs;
    } catch (error) {
        return error;
    }
};
const createSong = async (song) => {
    try {
        const { name, artist, album, time, is_favorite } = song;

        const create = await db.any(
            "INSERT INTO songs (name, artist, album, time ,is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [name, artist, album, time, is_favorite]
        );
        return create[0];
    } catch (error) {
        return error;
    }
};
const deleteSong = async (id) => {
    try {
        const deletedSong = await db.any(
            `DELETE FROM songs WHERE id = $1 RETURNING *`,
            id
        );

        return deletedSong;
    } catch (e) {
        return e;
    }
};
const updateSong = async (song, id) => {
    try {
        const { name, artist, album, time, is_favorite } = song;
        const updateFields = {
            name,
            artist,
            album,
            time,
            is_favorite,
        };
        console.log(updateFields);
        let query = "UPDATE songs SET ";
        let values = [];
        let valueIndex = 1;

        for (const field in updateFields) {
            const value = updateFields[field];
            if (value !== null && value !== undefined) {
                query += `${field} = $${valueIndex}, `;
                values.push(value);
                valueIndex++;
            }
        }
        query = query.slice(0, -2);

        query += ` WHERE id = $${valueIndex++} RETURNING *`;

        const updatedSong = await db.any(query, [...values, id]);
        /*
        const updatedSong = await db.any(
            "UPDATE  songs SET name = '$1', artist = '$2' , album = '$3',time = '$4', is_favorite=$5 WHERE id=$6 RETURNING *",
            [name, artist, album, time, is_favorite, id]
        );*/

        return updatedSong;
    } catch (e) {
        return e;
    }
};
const getAllArtistsOnSong = async (id) => {
    try {
        const songs = await db.any(
            `SELECT a.* FROM collaborations c LEFT JOIN songs s ON c.song_id=s.id LEFT JOIN artist a ON c.artist_id=a.id WHERE c.song_id=$1`,
            id
        );
        return songs;
    } catch (error) {
        return error;
    }
};
module.exports = {
    getAllSongs,
    getSingleSong,
    createSong,
    deleteSong,
    updateSong,
    getAllArtistsOnSong,
};
