import React, { useState, useContext, useEffect } from "react";
import { SongsListContent } from "../Context/Context";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./SongDetails.css";
function SongDetails() {
  const { allSongs, handleDelete } = useContext(SongsListContent);
  const { id } = useParams();

  const [songInfo, setSongInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const foundSong = allSongs.find((item) => item.id === Number(id));
      setSongInfo(foundSong);
    }
    axios.get(`http://localhost:3001/songs/${id}`);
  }, [allSongs, id]);

  function handleBack() {
    navigate("/songs");
  }

  function handleEdit(songId) {
    navigate(`/songs/${songId}/edit`);
  }
  return (
    <div className="details">
      <h2>Tuner Song Details</h2>
      {songInfo && (
        <div className="table-container">
          <table className="table">
            <tbody className="Song-Details">
              <tr>
                <td>Name: {songInfo.name}</td>
              </tr>
              <tr>
                <td>Album: {songInfo.album}</td>
              </tr>
              <tr>
                <td>Artist: {songInfo.artist}</td>
              </tr>
              <tr>
                <td>Favorite: {songInfo.is_favorite === true ? "⭐️" : ""}</td>
              </tr>
              <tr>
                <td>Duration: {songInfo.time}</td>
              </tr>
            </tbody>
          </table>
          <div className="buttons">
            <button onClick={handleBack}>Back</button>
            <button onClick={() => handleEdit(id)}>Edit</button>
            <button onClick={() => handleDelete(songInfo.id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SongDetails;
