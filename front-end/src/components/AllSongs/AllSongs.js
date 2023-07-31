import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import "./AllSongs.css";

function AllSongs() {
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
      <h2 className="h2-title">Index</h2>
      <Link className="navlink-button" to="/songs/new">
          <input type="submit" href="/songs/new" value="New Song" />
      </Link>
      <div className="table-container">
        <table id="Songs">
          <tbody className="Songs">
            <tr>
              <th><h3>Fav</h3></th>
              <th><h3>Song</h3></th>
              <th><h3>Artist</h3></th>
              <th><h3>Time</h3></th>
            </tr>

            {songsArray.map(({ is_favorite, name, artist, time, id }) => {
              return (
                <tr key={id} className="Song">
                  <td>{is_favorite && <>⭐️</>}</td>

                  <td>
                    <Link className="song" to={`/songs/${id}`}>
                      <h2>{name}</h2>
                    </Link>
                  </td>

                  <td>
                    <Link className="song" to={`/songs/${id}`}>
                      <h2>{artist}</h2>
                    </Link>
                  </td>

                  <td>
                    <Link className="song" to={`/songs/${id}`}>
                      <h2>{time}</h2>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllSongs;