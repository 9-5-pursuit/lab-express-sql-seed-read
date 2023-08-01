import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";

import Songs from "../Songs/Songs";

function Song() {
  let url = process.env.REACT_APP_API_URL;
  const [song, setSong] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    fetchSongById();
  }, []);

  async function fetchSongById() {
    try {
      let result = await axios.get(`${url}/songs/${id}`);
      //   console.log(result);
      setSong(result.data);
      console.log(song);
    } catch (e) {
      console.log(e);
    }
  }

  const deleteSong = async () => {
    try {
      const response = await axios.delete(`${url}/songs/${id}`);
      console.log(response.data);
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
          <p>Name: {song.name}</p>
          <p>Artist: {song.artist}</p>
          <p>Album: {song.album}</p>
          <p>Time: {song.time}</p>
          <p>Favorite: {song.is_favorite ? "true" : "false"}</p>
          <Link to={`/songs/${id}/edit`}>
            {" "}
            <button>Edit</button>
          </Link>
          <button onClick={() => deleteSong()}>Delete</button>
          <button onClick={() => navigate("/songs")}>Back</button>
        </div>
      )}

      <Songs />
    </div>
  );
}

export default Song;

/*
  Current Task: Make the delete button work
*/
