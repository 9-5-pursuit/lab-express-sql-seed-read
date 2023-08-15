import React, { useState, useEffect, useContext } from "react";
import { SongsListContent } from "../Context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./NewSong.css";

function NewSong() {
  const { allSongs, setAllSongs } = useContext(SongsListContent);
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();
  const [songInfo, setSongInfo] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: isFavorite,
  });

  useEffect(() => {
    setSongInfo((prevState) => ({
      ...prevState,
      is_favorite: isFavorite,
    }));
  }, [isFavorite]);

  function handleTextChange(e) {
    setSongInfo({
      ...songInfo,
      [e.target.id]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const addedSong = {
      ...songInfo,
    };
    setAllSongs([...allSongs, addedSong]);
    await axios.post("http://localhost:3001/songs", addedSong);

    navigate("/songs");
  }
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Add New Song</h3>
        <div className="form-group">
          <label>Song Name:</label>
          <input
            type="text"
            id="name"
            value={songInfo.name}
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Artist:</label>
          <input
            type="text"
            id="artist"
            value={songInfo.artist}
            onChange={handleTextChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Album:</label>
          <input
            type="text"
            id="album"
            value={songInfo.album}
            onChange={handleTextChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Time:</label>
          <input
            type="text"
            id="time"
            value={songInfo.time}
            onChange={handleTextChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Favorite:</label>
          <input
            type="checkbox"
            id="is_favorite"
            value={songInfo.is_favorite}
            onChange={() => setIsFavorite(!isFavorite)}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewSong;
