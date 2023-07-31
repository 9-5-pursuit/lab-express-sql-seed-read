import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Songs() {
  let url = process.env.REACT_APP_API_URL;
  let navigate = useNavigate();

  const [songsData, setSongsData] = useState([]);

  async function fetchSongsData() {
    try {
      let result = await axios.get(`${url}/songs`);

      console.log(result);

      setSongsData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSongsData();
  }, []);

  function showData() {
    return (
      <table className="table  caption-top container">
        <thead>
          <tr>
            <th scope="col">Fav</th>
            <th scope="col">Name</th>
            <th scope="col">Artist</th>
            <th scope="col">Album</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {songsData.map(({ id, name, artist, album, time, is_favorite }) => {
            return (
              <tr
                className="cursor-pointer"
                onClick={() => navigate(`/songs/${id}`)}
                key={id}
              >
                <td>{is_favorite ? "✅" : "❌"}</td>
                <td>{name}</td>
                <td>{artist}</td>
                <td>{album}</td>
                <td>{time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      {songsData.length === 0 ? (
        <div>Please go create some songs</div>
      ) : (
        showData()
      )}
    </div>
  );
}

export default Songs;
