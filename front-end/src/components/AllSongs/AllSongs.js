/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AllSongs.css";
import { getAllSongsAPI } from "../API/API";

function AllSongs() {
  const [songsData, setSongsData] = useState([]);

  let navigate = useNavigate();

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    try {
      const { data } = await getAllSongsAPI();
      setSongsData(data);

      console.log(songsData);
    } catch (error) {
      console.log(error);
    }
  }

  function goToSong(id) {
    navigate(`/songs/${id}`);
  }

  function goToNewSong() {
    navigate(`/songs/new`);
  }

  return (
    // <div>
    //   <div>
    //     <h2>Index</h2>
    //     <button onClick={goToNewSong}>NEW SONG</button>
    //   </div>
    //   {songsData.map(({ id, is_favorite, artist, time }) => (
    //     <div key={id} onClick={() => goToSong(id)}>
    //       {is_favorite && "true"} {artist} {time}
    //     </div>
    //   ))}
    // </div>
    <div className="container">
      <div>
        <h2>Index</h2>
        <button className="button" onClick={goToNewSong}>
          NEW SONG
        </button>
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Favorite</th>
              <th>Artist</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {songsData.map(({ id, is_favorite, artist, time }) => (
              <tr key={id} onClick={() => goToSong(id)}>
                <td>{is_favorite ? "⭐️" : ""}</td>
                <td>{artist}</td>
                <td>{time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllSongs;
