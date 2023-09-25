import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios for making API requests

const NewSong = () => {
  const navigate = useNavigate();
  const [songData, setSongData] = useState({
    name: '',
    artist: '',
    album: '',
    is_favorite: false,
    time: '',
  });
  let url = process.env.REACT_APP_API_URL;

  const handleChange = (e) => {

    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setSongData({
      ...songData,
      [name]: newValue,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${url}/songs`, songData)
      .then(() => {
       navigate('/songs');
      })
      .catch((error) => {
        console.error('Error creating new song:', error);
      });
      
  };

  return (
    <div>
      <h1>Add New Song</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={songData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={songData.artist}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="album">Album:</label>
          <input
            type="text"
            id="album"
            name="album"
            value={songData.album}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="is_favorite">Favorite:</label>
          <input
            type="checkbox"
            id="is_favorite"
            name="is_favorite"
            checked={songData.is_favorite}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            name="time"
            value={songData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
};

export default NewSong;
