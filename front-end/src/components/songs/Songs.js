import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Songs() {
  const [songData, setSongData] = useState([]);

  async function fetchSongsData() {
    try {
      const url = process.env.REACT_APP_API_URL;
      const result = await axios.get(`${url}/songs`);
      setSongData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSongsData();
  }, []);

  function renderSongs() {
    return songData.map((song) => (
      <div key={song.id} className="song-item">
        <h3>{song.name}</h3>
        <p>Artist: {song.artist}</p>
        <p>Album: {song.album || "N/A"}</p>
        <p>Time: {song.time || "N/A"}</p>
        <div className="favorite">
          {song.is_favorite && <i className="fas fa-star"></i>}
        </div>
        <div className="actions">
          <Link to={`/songs/${song.id}`}>View Details</Link>
          <Link to={`/songs/${song.id}/edit`}>Edit</Link>
        </div>
      </div>
    ));
  }

  return (
    <div>
      <h2>Songs List</h2>
      <div className="song-list">
        {songData.length === 0 ? (
          <div>Please go add some songs!</div>
        ) : (
          renderSongs()
        )}
      </div>
    </div>
  );
}

export default Songs;
