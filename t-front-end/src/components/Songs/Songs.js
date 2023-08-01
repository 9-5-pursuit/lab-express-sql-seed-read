import React, { useState, useEffect, fragment } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Songs() {
  let url = process.env.REACT_APP_API_URL;

  const [songsData, setSongsData] = useState([]);

  async function fetchSongsData() {
    try {
      let result = await axios.get(`${url}/songs`);
      console.log(result);
      setSongsData(result.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchSongsData();
  }, []);

  return (
    <fragment>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Song</th>
            <th scope="col">Artist</th>
            <th scope="col">Time</th>
            <th scope="col">Fav</th>
          </tr>
        </thead>
        <tbody>
          {songsData.map((song) => (
            <tr key={song.id}>
              {/* <th scope="row">1</th> */}
              <td>{song.name}</td>
              <td>{song.artist}</td>
              <td>{song.time}</td>
              <td>{song.is_favorite}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <ul>
        {songsData.map(({ id, name, artist, album, is_favorite, time }) => {
          return (
            <li key={id}>
              Song name: <strong>{name},</strong>
              <Link to={`/songs/${id}`}>See song info</Link> <br />
              artist: {artist}
              time: {is_favorite}
              favorite: {time}
            </li>
          );
        })}
      </ul> */}
    </fragment>
  );
}

export default Songs;
