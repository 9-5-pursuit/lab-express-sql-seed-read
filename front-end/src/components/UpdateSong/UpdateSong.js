/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateSong() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [songsData, setSongsData] = useState({
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
      const API = process.env.REACT_APP_API_URL;
      let { data } = await axios.get(`${API}/songs/${id}`);
      setSongsData(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateSongsData(e) {
    e.preventDefault();

    try {
      const API = process.env.REACT_APP_API_URL;

      await axios.put(`${API}/songs`, songsData);

      setSongsData({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
      });

      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  }

  function goBack() {
    navigate(-1);
  }

  function handleOnChange(id, value) {
    setSongsData({ ...songsData, [id]: value });
  }

  return (
    <div className="container mt-5">
      <div className="card p-4">
        <form onSubmit={updateSongsData}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="name"
              onChange={(e) => handleOnChange(e.target.id, e.target.value)}
              value={songsData.name}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="artist" className="form-label">
              Artist
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="artist"
              onChange={(e) => handleOnChange(e.target.id, e.target.value)}
              value={songsData.artist}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="album" className="form-label">
              Album
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="album"
              onChange={(e) => handleOnChange(e.target.id, e.target.value)}
              value={songsData.album}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="time" className="form-label">
              Time
            </label>
            <input
              required
              type="text"
              className="form-control"
              id="time"
              onChange={(e) => handleOnChange(e.target.id, e.target.value)}
              value={songsData.time}
            />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="is_favorite"
                onChange={(e) => handleOnChange(e.target.id, e.target.checked)}
                value={songsData.favorite}
              />
              <label className="form-check-label" htmlFor="is_favorite">
                Favorite
              </label>
            </div>
          </div>
          <button onClick={goBack} className="btn btn-secondary">
            BACK
          </button>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateSong;
