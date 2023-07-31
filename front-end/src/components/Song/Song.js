import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

function Song() {
  const [song, setSong] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  let url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getSongById();
  }, []);

  async function getSongById() {
    try {
      let result = await axios.get(`${url}/songs/${id}`);
      setSong(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      await axios.delete(`${url}/songs/${id}`);
      alert("Song was deleted successfully!");
      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {song ? (
        <div>
          <h2>{song.name}</h2>
          <p>Artist: {song.artist}</p>
          <p>Album: {song.album}</p>
          <p>Time: {song.time}</p>
          <p>Favorite: {song.is_favorite ? "Yes" : "No"}</p>
          <button onClick={handleDelete}>Delete</button>
          <Link to={`/songs/${id}/edit`}>
            <button>Edit</button>
          </Link>
          <Link to="/songs">
            <button>Back</button>
          </Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Song;
