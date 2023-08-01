import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Songs() {
  let url = process.env.REACT_APP_API_URL;

  const navigate = useNavigate();

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
    <div>
      <table className="table">
        <thead>
          <button
            onClick={() => navigate("/songs/new")}
            type="button"
            class="btn btn-success"
          >
            {" "}
            New
          </button>
          <tr>
            <th scope="col">Song</th>
            <th scope="col">Artist</th>
            <th scope="col">Time</th>
            <th scope="col">Fav</th>
          </tr>
        </thead>
        <tbody>
          {songsData.map(({ id, name, artist, time, is_favorite }) => (
            <tr key={id}>
              {/* <th scope="row">1</th> */}
              <td onClick={() => navigate(`/songs/${id}`)}>
                {name}
                {/* <Link to={`/songs/${id}`}></Link> <br /> */}
              </td>
              <td>{artist}</td>
              <td>{time}</td>
              <td>{is_favorite}</td>
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
    </div>
  );
}

export default Songs;
