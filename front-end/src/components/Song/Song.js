/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Song.css";
import { getAllSongsFromArtistApi } from "../API/API";

const API = process.env.REACT_APP_API_URL;

function Song() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [songsData, setSongsData] = useState({});
  const [artistsData, setArtistsData] = useState([]);

  useEffect(() => {
    fetchData();
    fetchArtistsData();
  }, []);

  async function fetchData() {
    try {
      let { data } = await axios.get(`${API}/songs/${id}`);
      setSongsData(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchArtistsData() {
    try {
      let { data } = await getAllSongsFromArtistApi(id);
      setArtistsData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  function goBack() {
    navigate(-1);
  }

  function goUpdate() {
    navigate(`/songs/${id}/edit`);
  }

  function goToSong(songId) {
    navigate("/songs");
    setTimeout(() => {
      navigate(`/songs/${songId}`);
    }, 100);
  }

  // for the delete function i want to provide an alert and preferably one self made
  async function deleteSong() {
    try {
      await axios.delete(`${API}/songs/${id}`);
      alert("do you want to delete?");
      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  }

  console.log(songsData);

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h3>
              {songsData.is_favorite && "⭐️"} {songsData.name} -{" "}
              {songsData.artist}
            </h3>
            <h4>{songsData.album}</h4>
            <p>Time: {songsData.time}</p>
            <button className="button" onClick={goBack}>
              BACK
            </button>
            <button className="button" onClick={goUpdate}>
              UPDATE
            </button>
            <button className="button" onClick={deleteSong}>
              DELETE
            </button>
          </div>
        </div>
      </div>

      <h3>More songs by {songsData.artist}</h3>

      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Album</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {artistsData.map(({ id: songId, name, album, time }, index) => (
              <tr key={songId + index} onClick={() => goToSong(songId)}>
                <td>{name}</td>
                <td>{album}</td>
                <td>{time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Song;
