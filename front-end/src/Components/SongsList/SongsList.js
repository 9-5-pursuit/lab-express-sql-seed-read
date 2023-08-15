import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SongsListContent } from "../Context/Context";

import "./SongsList.css";

function SongsList() {
  const { allSongs } = useContext(SongsListContent);
  const navigate = useNavigate();

  function handleSongDetail(songId) {
    navigate(`/songs/${songId}`);
  }
  console.log(allSongs);
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Artist</th>
            <th>Duration</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {allSongs.map((song) => (
            <tr
              className="Songs"
              key={song.id}
              onClick={() => handleSongDetail(song.id)}
            >
              <td>{song.name}</td>
              <td>{song.artist}</td>
              <td>{song.time}</td>
              <td>{song.is_favorite ? "⭐️" : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SongsList;
