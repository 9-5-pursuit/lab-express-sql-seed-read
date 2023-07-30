import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [songsArr, setSongsArr] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const results = await axios.get(`${process.env.REACT_APP_API_URL}/songs`);
      //console.log(results.data);
      setSongsArr(results.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="container">
      <br />
      <h1>Songs</h1>
      <br />
      <>
        <table className="table text-center table-hover table-striped table-dark table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Artist</th>
              <th scope="col">Album</th>
              <th scope="col">Time</th>
              <th scope="col">Favorite</th>
            </tr>
          </thead>
          <tbody>
            {songsArr.map(({ name, artist, album, time, is_favorite, id }) => {
              return (
                <tr
                  key={id}
                  className="text-center"
                  onClick={() => navigate(`/songs/${id}`)}
                >
                  <td>{name}</td>
                  <td>{artist}</td>
                  <td>{album}</td>
                  <td>{time}</td>
                  <td>{is_favorite ? "⭐️" : ""}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default Home;
