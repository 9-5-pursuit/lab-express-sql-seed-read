import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Songs() {
  let url = process.env.REACT_APP_API_URL;

  const [songData, setSongData] = useState([]);

  async function fetchSongsData() {
    try {
      let result = await axios.get(`${url}/songs`);

      setSongData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSongsData();
  }, []);

  function showData() {
    return (
      <ul>
        {songData.map(({ id, name }) => {
          return (
            <li key={id}>
              {name} - <Link to={`/songs/${id}`}>See this song</Link>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div>
      {songData.length === 0 ? (
        <div>Please go create some songs</div>
      ) : (
        showData()
      )}
    </div>
  );
}

export default Songs;
