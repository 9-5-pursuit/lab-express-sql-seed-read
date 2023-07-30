import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function Song() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [song, setSong] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function handleDelete() {
    try {
      await axios.delete(`${process.env.REACT_APP_API_URL}/songs/${id}`);
      alert(`Successfully Deleted Song`);
      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchData() {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_API_URL}/songs/${id}`
      );
      //console.log(result.data);
      setSong(result.data);
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
          style={{ backgroundColor: "#686868", borderColor: "#000000" }}
        >
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-bold">{song.name}</h1>
            <h3 className="display-5">Artist: {song.artist}</h3>
            <p className="col-md-8 fs-4">{song.album}</p>
            <p className="col-md-8 fs-4">Duration: {song.time}</p>
            <div className="btn-group">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => navigate(-1)}
              >
                Back
              </button>
              <button
                className="btn btn-primary btn-lg"
                onClick={() => navigate(`/edit-song/${id}`)}
              >
                Edit
              </button>
              <button className="btn btn-primary btn-lg" onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Song;
