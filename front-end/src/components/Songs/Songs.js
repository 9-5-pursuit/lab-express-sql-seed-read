import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function Songs() {
  const [songs, setSongs] = useState([]);

  async function fetchSongData() {
    try {
      const result = await axios.get(`${API}/songs`);
      setSongs(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSongData();
  }, []);

  function showData() {
    return (
      <div className="container Songs">
        <h1 className="mt-4 mb-4">Songs List</h1>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Song Name</th>
              <th>Artist</th>
              <th>Time</th>
              <th>Favorite</th>
            </tr>
          </thead>
          <tbody>
            {songs.map((item) => (
              <tr key={item.id} className="Song">
                <td>
                  <Link to={`/songs/${item.id}`}>{item.name}</Link>
                </td>
                <td>{item.artist}</td>
                <td>{item.time}</td>
                <td>{item.is_favorite ? "⭐️" : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {songs.length === 0 ? (
        <div className="alert alert-info">Please Add More Songs!</div>
      ) : (
        showData()
      )}
    </div>
  );
}

export default Songs;
