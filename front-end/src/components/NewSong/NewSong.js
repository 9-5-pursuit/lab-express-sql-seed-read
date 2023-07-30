import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function NewSong() {
  const navigate = useNavigate();

  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  function handleOnChange(id, value) {
    //console.log(id, value, typeof value);
    setSong({ ...song, [id]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/songs`, song);
      alert("New Song Created");
      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <br />
      <div className="container">
        <div
          className="p-5 mb-4 rounded-3 w-100"
          style={{ backgroundColor: "gray", borderColor: "#0000000" }}
        >
          <h1>New Song</h1>
          <div className="container-fluid py-5">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <label className="input-group-text">Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  required
                  onChange={(e) => {
                    handleOnChange(e.target.id, e.target.value);
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text">Artist</label>
                <input
                  className="form-control"
                  type="text"
                  id="artist"
                  required
                  onChange={(e) => {
                    handleOnChange(e.target.id, e.target.value);
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text">Album</label>
                <input
                  className="form-control"
                  type="text"
                  id="album"
                  required
                  onChange={(e) => {
                    handleOnChange(e.target.id, e.target.value);
                  }}
                />
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text">Duration</label>
                <input
                  className="form-control"
                  id="time"
                  required
                  type="time"
                  onChange={(e) => {
                    handleOnChange(e.target.id, e.target.value);
                  }}
                />
              </div>
              <div className="form-check mb-3">
                <input
                  id="is_favorite"
                  type="checkbox"
                  className="form-check-input"
                  onChange={(e) => {
                    handleOnChange(e.target.id, e.target.checked);
                  }}
                />
                <label className="form-check-label">Favorite</label>
              </div>
              <button className="btn btn-dark">Submit</button>
            </form>
            <br />
            <button className="btn btn-dark" onClick={(e) => navigate(-1)}>
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewSong;
