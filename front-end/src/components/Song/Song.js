import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Song() {
  const { id } = useParams();
  console.log("ID:", id);
  const [song, setSong] = useState(null);
  const navigate = useNavigate();

 let url = process.env.REACT_APP_API_URL;

  async function getSongByID() {
    try {
      let result = await axios.get(`${url}/songs/${id}`);
      setSong(result.data);
      console.log(id)
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDeleteById(id) {
    try {
      await axios.delete(`${url}/songs/${id}`);
      alert("Song Deleted");
      navigate("/songs");
    } catch (e) {
      console.log(e);
    }
  }

    useEffect(() => {
      getSongByID();
    }, []);

  return (
    <div className="App">
      <h2 className="h2-title">Show</h2>
      {song && (
        <div className="Song-Details">
          <p>{song.is_favorite ? <>⭐️</> : null}</p>
          <p>
            {song.name} - By {song.artist}
          </p>
          <p>{song.album}</p>
          <p>Time: {song.time}</p>
          <button onClick={() => navigate("/songs")}>Back</button>
          <button onClick={() => navigate(`/songs/${id}/edit`)}>Edit</button>
          <button onClick={() => handleDeleteById(id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Song;
