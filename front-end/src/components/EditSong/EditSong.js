import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditSong() {
  const [songData, setSongData] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSongById();
  }, []);

  async function getSongById() {
    try {
      const url = process.env.REACT_APP_API_URL;
      const response = await axios.get(`${url}/songs/${id}`);
      setSongData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

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
      await axios.put(`${url}/songs/${id}`, songData);
      alert("Song edited successfully!");
      navigate(`/songs/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Edit Song</h2>
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
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default EditSong;
