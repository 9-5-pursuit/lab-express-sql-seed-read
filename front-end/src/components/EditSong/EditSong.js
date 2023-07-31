import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
let url = process.env.REACT_APP_API_URL;

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
    const fetchSong = async () => {
      try {
        const response = await axios.get(`${url}/songs/${id}`);

        setSong(response.data);
      } catch (error) {
        navigate("/404");
      }
    };

    fetchSong();
  }, []);

  const handleTextChange = (e) => {
    setSong({
      ...song,
      [e.target.id]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setSong({
      ...song,
      is_favorite: !song.is_favorite,
    });
  };

  const updateSong = async (id) => {
    try {
      await axios.put(`${url}/songs/${id}`, song);
    } catch (e) {
      console.log(e);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateSong(id);
      navigate(`/songs/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            required
            type="text"
            name="name"
            id="name"
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
            value={song.time}
          />
        </div>
        <div>
          <label>Favorite</label>
          <input
            type="checkbox"
            name="is_favorite"
            id="is_favorite"
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditSong;
