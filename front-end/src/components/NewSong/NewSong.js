import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewSong() {
  let navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  async function createSong(e) {
    e.preventDefault();

    let api = process.env.REACT_APP_API_URL;

    try {
      await axios.post(`${api}/songs`, song);
      console.log(song);

      setSong({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
      });
      navigate("/songs");
    } catch (e) {
      console.log(e);
    }
  }
  function handleOnchange(id, value) {
    setSong({
      ...song,
      [id]: value,
    });
    console.log(song);
  }

  return (
    <div>
      <form onSubmit={createSong}>
        <div>
          <label>Name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={song.name}
          />
        </div>
        <div>
          <label>Artist</label>
          <input
            required
            type="text"
            name="artist"
            id="artist"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={song.artist}
          />
        </div>
        <div>
          <label>Album</label>
          <input
            required
            type="text"
            name="album"
            id="album"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={song.album}
          />
        </div>
        <div>
          <label>Time</label>
          <input
            required
            type="text"
            name="time"
            id="time"
            onChange={(e) => handleOnchange(e.target.id, e.target.value)}
            value={song.time}
          />
        </div>
        <div>
          <label>Favorite</label>
          <input
            required
            type="checkbox"
            name="is_favorite"
            id="is_favorite"
            onChange={(e) => handleOnchange(e.target.id, e.target.checked)}
            value={song.is_favorite}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewSong;
