import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

function Songs() {
  let url = process.env.REACT_APP_API_URL;
  const [songsArray, setsongsArray] = useState([]);

  useEffect(() => {
    async function fetchSongsData() {

      try {
        let result = await axios.get(`${url}/songs`);
        setsongsArray(result.data);
      } catch (e) {
        console.log(e);
      }
    }

    fetchSongsData();
    
  }, [url]);

  return (
    <div>
      <h1>Song List</h1>
      <ul>
        {songsArray.map((song) => (
          <li key={song.id}>
            <Link to={`/songs/${song.id}`}>
              {song.name} - {song.artist} ({song.time})
            </Link>
            <span>{song.is_favorite ? ' - Favorite' : ''}</span>
          </li>
        ))}
      </ul>
      <Link to="/songs/new">
        <button>Add New Song</button>
      </Link>
    </div>
  );
};

export default Songs;
