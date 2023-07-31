import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewSong() {
  const [songData, setSongData] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSongData({
      ...songData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = process.env.REACT_APP_API_URL;
      await axios.post(`${url}/songs`, songData);
      alert("New Song Created!");
      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Create New Song</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={songData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Artist:
          <input
            type="text"
            name="artist"
            value={songData.artist}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Album:
          <input
            type="text"
            name="album"
            value={songData.album}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="text"
            name="time"
            value={songData.time}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Is Favorite:
          <input
            type="checkbox"
            name="is_favorite"
            checked={songData.is_favorite}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Create Song</button>
      </form>
    </div>
  );
}

export default NewSong;
