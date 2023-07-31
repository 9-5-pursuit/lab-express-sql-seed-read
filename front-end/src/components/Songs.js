import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Songs() {
  const [songsData, setSongData] = useState([]);
  let api = process.env.REACT_APP_API_URL;

  async function fetchSongsData() {
    try {
      const result = await axios.get(`${api}/songs`);

      setSongData(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchSongsData();
  }, []);

  return (
    <div>
      <h1>Index</h1>
      <table>
        <tbody>
          <tr>
            <th>Favortie</th>
            <th>Song</th>
            <th>Artist</th>
            <th>Time</th>
          </tr>
          {songsData.map((song, index) => {
            return (
              <tr key={index}>
                <td>{song.is_favorite ? "⭐️" : ""}</td>

                <td>
                  <Link to={`/songs/${song.id}`}>{song.name}</Link>
                </td>

                <td>{song.artist}</td>
                <td>{song.title}</td>
                <td>{song.time}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Songs;
