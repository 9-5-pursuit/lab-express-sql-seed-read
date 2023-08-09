import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function EditSong() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  useEffect(() => {
    fetchSongData();
  }, []);

  async function fetchSongData() {
    try {
      const result = await axios.get(`${API}/songs/${id}`);
      setSong(result.data);
    } catch (error) {
      navigate("/404");
    }
  }

  async function updateSong(event) {
    event.preventDefault();
    try {
      await axios.put(`${API}/songs/${id}`, song);
      alert(`You just updated the information for ${song.name}`);
      navigate(`/songs/${id}`);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(id, value) {
    setSong({
      ...song,
      [id]: value,
    });
  }

  return (
    <div className="container bg-light form-container">
      <h1 className="text-center mt-4 mb-4">Edit Song</h1>
      <div className="row justify-content-center">
        <div className="col-12">
          <form onSubmit={updateSong} className="w-50 mx-auto">
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
              <label htmlFor="time">Song Length</label>
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
      </div>
    </div>
  );
}

export default EditSong;
