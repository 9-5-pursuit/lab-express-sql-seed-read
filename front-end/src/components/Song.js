import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function Song() {
  const [song, setSong] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  let api = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchSongsById();
  }, []);

  async function fetchSongsById() {
    try {
      let result = await axios.get(`${api}/songs/${id}`);

      setSong(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteSong() {
    try {
      let result = await axios.delete(`${api}/songs/${id}`);
      console.log(result);

      setSong(result.data);

      alert("This song has been deleted!");

      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <h1>Show</h1>
      <div>
        <p>Name: {song.name}</p>
        <p>Artist: {song.artist}</p>
        <p>Album: {song.album}</p>
        <p>Time: {song.time}</p>
        <p>Favorite: {song.is_favorite ? "true" : "false"}</p>
      </div>
      <button onClick={() => deleteSong()}>Delete</button>
      <Link to={`/songs/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <button onClick={() => navigate("/songs")}>Back</button>
    </div>
  );
}

export default Song;
