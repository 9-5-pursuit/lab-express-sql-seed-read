import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap"

function Song() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

 let url = process.env.REACT_APP_API_URL;

  async function getSongByID() {
    try {
      let result = await axios.get(`${url}/songs/${id}`);
      setSong(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDeleteById(id) {
    setShowConfirmation(true);
  }

  async function handleConfirmDelete() {
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

    function handleCancelDelete() {
      setShowConfirmation(false);
    }

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
        {showConfirmation && (
        <div className="song-deletion-container-navigation">
          <p>
            <strong>Are you sure you want to delete this song?</strong>
          </p>
          <ul>
            <li>
              <Button variant="primary" onClick={handleConfirmDelete}>
                Yes
              </Button>
            </li>
            <li>
              <Button variant="secondary" onClick={handleCancelDelete}>
                No
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Song;
