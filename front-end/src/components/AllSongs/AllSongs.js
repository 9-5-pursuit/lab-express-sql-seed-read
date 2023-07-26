import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap"

function AllSongs() {
    let url = process.env.REACT_APP_API_URL;
  const [songsArray, setsongsArray] = useState([]);

  async function fetchSongsData() {
    try {
      let result = await axios.get(`${url}/songs`);
      setsongsArray(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchSongsData();
  }, []);

  return (
    <div>
      <h2 className="h2-title">Index</h2>
      <Link className="navlink" to="/songs/new">
        <input type="submit" href="/songs/new" value="New Song" />
      </Link>
      <div className="table-container">
        <table id="Songs">
          <tbody className="Songs">
            <tr>
              <th>Fav</th>
              <th>Song</th>
              <th>Artist</th>
              <th>Time</th>
            </tr>

            {songsArray.map(({ is_favorite, name, artist, time, id }) => {
              return (
                <tr key={id} className="Song">
                  <td>{is_favorite && <>⭐️</>}</td>

                  <td>
                    <Link to={`/songs/${id}`}>
                      <h2>{name}</h2>
                    </Link>
                  </td>

                  <td>
                    <Link to={`/songs/${id}`}>
                      <h2>{artist}</h2>
                    </Link>
                  </td>

                  <td>
                    <Link to={`/songs/${id}`}>
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