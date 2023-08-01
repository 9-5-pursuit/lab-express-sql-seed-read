import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./NewSongForm.css";

function NewSongForm() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  async function handleOnSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/songs`, { ...data });

      alert("Successful post");
      navigate("/songs");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="form-form-container">
      <div>
        <h2>New Song</h2>
      </div>

      <div className="form-container-form">
        <form onSubmit={handleOnSubmit}>
          <div className="form-container-input">
            <label>Song's Name</label>
            <input
              type="text"
              value={data.name}
              onChange={(e) => {
                setData({ ...data, name: e.target.value });
              }}
            />
          </div>

          <div className="form-container-input">
            <label>Artist</label>
            <input
              type="text"
              value={data.artist}
              onChange={(e) => {
                setData({ ...data, artist: e.target.value });
              }}
            />
          </div>

          <div className="form-container-input">
            <label>Album</label>
            <input
              type="text"
              value={data.album}
              onChange={(e) => {
                setData({ ...data, album: e.target.value });
              }}
            />
          </div>

          <div className="form-container-input">
            <label>Time</label>
            <input
              type="number"
              value={data.time}
              onChange={(e) => {
                setData({ ...data, time: e.target.value });
              }}
            />
          </div>

          <div className="form-container-label-checkbox">
            <label>Favorite:</label>
            <input
              type="checkbox"
              value={data.is_favorite}
              onChange={(e) => {
                setData({
                  ...data,
                  is_favorite: !data.is_favorite,
                });
              }}
            />
          </div>
          <div>
            <button>Back</button>
            <button>Delete</button>
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewSongForm;
