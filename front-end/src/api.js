import axios from "axios";

export const fetchData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
export const fetchPlay = async (args) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URLB}/get/${args}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
export const fetchOrderData = async (args) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}`, { params: { order: args}});
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
export const fetchAlbumData = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URLA}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
export const fetchSongInfo = async (args) => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URLA}`, { params: { album: args.album, artist: args.artist } });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
export const newPlaylist = async (args) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URLB}/new/${args}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
export const newPlaylistRow = async (args, argsb) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URLB}/addSong`, { name: args, id: argsb });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
export const setSongInfo = async (args) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}`, args);
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
};
