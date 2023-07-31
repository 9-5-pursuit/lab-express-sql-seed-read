import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Song() {
  const { id } = useParams();
  let navigate = useNavigate();

  const [songArray, setSongArray] = useState([]);
  let url = process.env.REACT_APP_API_URL;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      let result = await axios.get(`${url}/songs/${id}`);
      console.log(result.data.is_favorite);

      setSongArray(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleDeleteById(id) {
    try {
      let result = await axios.delete(`${url}/songs/${id}`);

      setSongArray(result.data);

      navigate("/songs");
    } catch (e) {
      console.log(e.response);
    }
  }

  function handleEdit(id) {
    navigate(`/songs/edit-song/${id}`);
  }

  return (
    <div className="container">
      <h2 className="my-3"></h2>

      <div className="card text-center mb-3">
        <div className="card-body ">
          <h3 className="card-title">{songArray.name}</h3>
          <p className="card-text">{songArray.artist}</p>
          <p className="card-text">
            <strong>{songArray.album}</strong>
          </p>
          <p className="card-text">
            <strong>{songArray.time}</strong>
          </p>
          <p className="card-text">
            <strong> Is Favorite: </strong>
            {songArray.is_favorite ? "✅" : "❌"}
          </p>

          <button
            onClick={() => navigate("/songs")}
            className="btn btn-outline-dark"
          >
            Back
          </button>
          <button
            onClick={() => handleEdit(id)}
            className="btn btn-outline-dark mx-3"
          >
            Edit
          </button>
          <button
            onClick={() => handleDeleteById(id)}
            className="btn btn-outline-dark"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Song;
