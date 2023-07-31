import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

function Song() {
  let url = process.env.REACT_APP_API_URL;
  const [song, setSong] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    toFetchSongById();
  }, []);

  async function toFetchSongById() {
    try {
      let result = await axios.get(`${url}/songs/${id}`);

      setSong(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteSong = async () => {
    try {
      const response = await axios.delete(`${url}/songs/${id}`);
      console.log(response);
      const { name } = response.data;
      alert(`Song ${name} has been deleted`);
      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {song && (
        <div>
          <p>name: {song.name}</p>
          <p>artist: {song.artist}</p>
          <p>album: {song.album}</p>
          <p>time: {song.time}</p>
          <p>favorite: {song.is_favorite ? "true" : "false"}</p>
          <Link to={`/songs/${id}/edit`}>
            {" "}
            <button>Edit</button>
          </Link>
          <button onClick={() => deleteSong()}>Delete</button>
          <button onClick={() => navigate("/songs")}>Back</button>
        </div>
      )}
    </div>
  );
}

export default Song;
