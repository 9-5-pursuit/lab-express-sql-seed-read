import Axios from "../Axios/Axios";

async function getAllSongsAPI() {
  try {
    let result = await Axios.get("/songs");
    return result;
  } catch (e) {
    console.log(e);
  }
}

async function getAllSongsFromArtistApi(id) {
  try {
    let result = await Axios.get(`/songs/${id}/artists-songs`);
    return result;
  } catch (error) {
    console.log(error);
  }
}

export { getAllSongsAPI, getAllSongsFromArtistApi };
