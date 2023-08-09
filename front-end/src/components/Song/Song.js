import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Song() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [song, setSong] = useState(null);

  useEffect(() => {
    fetchSongDataById();
  }, []);

  async function fetchSongDataById() {
    try {
      const result = await axios.get(`${API}/songs/${id}`);
      setSong(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete() {
    try {
      await axios.delete(`${API}/songs/${id}`);
      alert(`'${song.name}' has been deleted`);
      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="Song-Details">
      <div className="container">
        {song ? (
          <div>
            <h1 className="mt-4 mb-4">{song.name}</h1>
            <p>Artist: {song.artist}</p>
            <p>Album: {song.album}</p>
            <p>Song Length: {song.time}</p>
            <p>Part of my Favorites: {song.is_favorite ? "⭐️" : ""}</p>
            <div>
              <Link to={`/songs/${id}/edit`} className="btn btn-primary mr-2">
                Edit
              </Link>
              <button onClick={handleDelete} className="btn btn-danger mr-2">
                Delete
              </button>
              <Link to="/songs" className="btn btn-secondary">
                Back
              </Link>
            </div>
          </div>
        ) : (
          <div className="alert alert-warning">
            <div>There is no song information available here!</div>
            <div>
              <Link to="/songs">
                Please choose from our available songs here
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Song;
