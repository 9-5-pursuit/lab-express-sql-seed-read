import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewSong() {
  let navigate = useNavigate();
  let url = process.env.REACT_APP_API_URL;

  const [nameState, setNameState] = useState("");
  const [artistState, setArtistState] = useState("");
  const [albumState, setAlbumState] = useState("");
  const [timeState, setTimeState] = useState("");
  const [isFavoriteState, setIsFavoriteState] = useState(false);

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      let result = await axios.post(`${url}/songs/`, {
        name: nameState,
        artist: artistState,
        album: albumState,
        time: timeState,
        is_favorite: isFavoriteState,
      });

      console.log(result);

      setNameState("");
      setArtistState("");
      setAlbumState("");
      setTimeState("");
      setIsFavoriteState();

      navigate(`/songs/${result.data[result.data.length - 1].id}`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="mx-3">
      <div>
        <h1>Add a new item</h1>
      </div>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Song Name:</label>
          <br />
          <input
            type="text"
            value={nameState}
            onChange={(e) => setNameState(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Artist:</label>
          <br />
          <input
            type="text"
            value={artistState}
            onChange={(e) => setArtistState(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Album:</label>
          <br />
          <input
            type="text"
            value={albumState}
            onChange={(e) => setAlbumState(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Time:</label>
          <br />
          <input
            type="text"
            value={timeState}
            onChange={(e) => setTimeState(e.target.value)}
          />
        </div>
        <div>
          <label>Is-Favorite:</label>
          <br />
          <input
            type="checkbox"
            value={isFavoriteState}
            onChange={() => setIsFavoriteState(!isFavoriteState)}
          />
        </div>

        <button className="mt-3 btn btn-outline-dark">Create New Item</button>
      </form>
    </div>
  );
}

export default NewSong;
