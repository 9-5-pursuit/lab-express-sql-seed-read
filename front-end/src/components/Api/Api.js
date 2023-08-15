import Axios from './Axios'

async function getAllSongs(){
    try {
        const result = await Axios.get("/songs");
        return result
    } catch (error) {
        return error
    }
}

async function getSongById (id) {
    try {
        let result = await Axios.get(`/songs/${id}`)
        return result
    } catch (error) {
        return error
    }
}

async function deleteSongById (id) {
    try {
        let result = await Axios.delete(`/songs/${id}`)
        return result
    } catch (error) {
        return error
    }
}

async function updateSongById (id, updatedSong) {
    try {
        let result = await Axios.put(`/songs/${id}`, updatedSong)
        return result
    } catch (error) {
        return error
    }
}
async function createSongApi (song){
    try {
        let result = await Axios.post(`/songs`, song)
        return result
    } catch (error) {
        return error
        
    }
}

async function getSongPlaylistApi(id){
    try {
        let result = await Axios.get(`/songs/${id}/playlist`)
        return result
    } catch (error) {
        return error
    }
}

async function updatePlaylistApi ( id, updatePlaylist, updatedPlaylist){
    try {
        let result = await Axios.put(
            `/songs/${id}/playlist/${updatePlaylist}`,
            updatedPlaylist
        )
        return result
    } catch (error) {
        return error
    }
}

async function createPlayistApi (id, newPlaylist){
    try {
        let result = await Axios.post(`/songs/${id}/playlist`, newPlaylist)
        return result
    } catch (error) {
        return error
    }
}

async function deletedPlaylistApi (id){
    try {
        let result = await Axios.delete(`/songs/${id}/playlists/${id}`)
        return result
    } catch (error) {
        return error
    }
}
export {
    getAllSongs,
    getSongById,
    deleteSongById,
    updateSongById,
    createSongApi,
    getSongPlaylistApi,
    updatePlaylistApi,
    createPlayistApi,
    deletedPlaylistApi

}