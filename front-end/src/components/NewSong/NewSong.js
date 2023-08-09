import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function NewSong() {
  const navigate = useNavigate();
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  async function createSong(event) {
    event.preventDefault();
    try {
      await axios.post(`${API}/songs`, song);
      setSong({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
      });
      navigate(`/songs`);
    } catch (error) {
      alert(event.response.data);
    }
  }

  function handleChange(id, value) {
    setSong({
      ...song,
      [id]: value,
    });
  }

  return (
    <div className="container">
      <h1 className="mt-4 mb-4 text-center">Add New Song</h1>
      <form onSubmit={createSong} className="w-50 mx-auto">
        <div className="form-group">
          <label htmlFor="name">Song Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
            value={song.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="artist">Artist</label>
          <input
            required
            type="text"
            className="form-control"
            id="artist"
            name="artist"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
            value={song.artist}
          />
        </div>
        <div className="form-group">
          <label htmlFor="album">Album</label>
          <input
            required
            type="text"
            className="form-control"
            id="album"
            name="album"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
            value={song.album}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input
            required
            type="text"
            className="form-control"
            id="time"
            name="time"
            onChange={(event) =>
              handleChange(event.target.id, event.target.value)
            }
            value={song.time}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="is_favorite"
            name="is_favorite"
            onChange={(event) =>
              handleChange(event.target.id, event.target.checked)
            }
            checked={song.is_favorite}
          />
          <label className="form-check-label" htmlFor="is_favorite">
            Favorite
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewSong;
