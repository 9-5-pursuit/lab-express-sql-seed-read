import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Song.css";

function Song() {
  const { id } = useParams();
  const [song, setSong] = useState(null);
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [artistSongs, setArtistSongs] = useState([]);
  const [showArtistSongs, setShowArtistSongs] = useState(false);

  let url = process.env.REACT_APP_API_URL;

  async function getSongsByArtistID(id) {
    try {
      let result = await axios.get(`${url}/songs/${id}/get-all-songs`);
      setArtistSongs(result.data);
      setShowArtistSongs(!showArtistSongs);
    } catch (e) {
      console.log(e);
    }
  } 

  async function handleDeleteById() {
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
     async function getSongByID() {
       try {
         let result = await axios.get(`${url}/songs/${id}`);
         setSong(result.data);
       } catch (e) {
         console.log(e);
       }
     }
    getSongByID(id);
  }, [id, url]);

  function handleCancelDelete() {
    setShowConfirmation(false);
  }

  function toggleArtistSongs() {
    setShowArtistSongs((prevShowArtistSongs) => !prevShowArtistSongs);
  }

  return (
    <div className="song-container">
      <h2 className="h2-title">Show</h2>
      {song && (
        <div className="Song-Details">
          <p>{song.is_favorite ? <>⭐️</> : null}</p>
          <p>
            {song.name} - By {song.artist}
          </p>
          <p>{song.album}</p>
          <p>Time: {song.time}</p>
        </div>
      )}
      {song && (
        <div className="Song-Details-navigation">
          <ul>
            <li>
              <Button
                variant="outline-secondary"
                onClick={() => navigate("/songs")}
              >
                Back
              </Button>
            </li>
            <li>
              <Button
                variant="outline-secondary"
                onClick={() => navigate(`/songs/${id}/edit`)}
              >
                Edit
              </Button>
            </li>
            <li>
              <Button
                variant="outline-secondary"
                onClick={() => handleDeleteById(id)}
              >
                Delete
              </Button>
            </li>
            <li>
              <Button
                variant="outline-secondary"
                onClick={() => {
                  getSongsByArtistID(id);
                  toggleArtistSongs();
                }}
              >
                {showArtistSongs
                  ? `Hide Songs`
                  : `All Songs by ${song.artist}`}
              </Button>
            </li>
          </ul>
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
      {showArtistSongs && artistSongs.length > 0 && (
        <div className="artist-details">
          <h3>All Songs by {song.artist}</h3>
          <ul>
            {artistSongs.map((song) => (
              <li key={song.id}>
                Song: {song.name} - Album: {song.album}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Song;
