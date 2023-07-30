import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
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
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/songs/${id}`
      );
      const isoData = result.data;

      if (isoData.time.length === 4) {
        let target = "0" + isoData.time;
        let format = { ...isoData, time: target };
        setSong(format);
      } else {
        setSong(isoData);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`${process.env.REACT_APP_API_URL}/songs/${id}`, song);
      alert(`Successfully Updated`);
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  }
  function handletTimeOnChange() {
    // take in both min and sec values from form and combine together into time value
  }

  function handleOnChange(id, value) {
    console.log(id, value, typeof value);
    setSong({ ...song, [id]: value });
  }
  return (
    <>
      <br />
      <div className="container">
        <div
          className="p-5 mb-4 rounded-3 w-100"
          style={{ backgroundColor: "gray", borderColor: "#0000000" }}
        >
          <h1>Edit Song</h1>
          <div className="container-fluid py-5">
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <label className="input-group-text">Name</label>
                <input
                  className="form-control"
                  type="text"
                  id="name"
                  value={song.name}
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
                  value={song.artist}
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
                  value={song.album}
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
                  value={song.time}
                  onChange={(e) => {
                    handleOnChange(e.target.id, e.target.value);
                  }}
                />
              </div>
              <div className="form-check mb-3">
                <input
                  id="is_favorite"
                  type="checkbox"
                  value={song.is_favorite}
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

export default EditSong;
