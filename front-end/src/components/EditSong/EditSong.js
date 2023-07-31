import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditSong() {
  let navigate = useNavigate();

  const { id } = useParams();

  const [nameState, setNameState] = useState("");
  const [artistState, setArtistState] = useState("");
  const [albumState, setAlbumState] = useState("");
  const [timeState, setTimeState] = useState("");
  const [isFavoriteState, setIsFavoriteState] = useState(false);

  useEffect(() => {
    handleFetch();
  }, []);

  let urlKey = process.env.REACT_APP_API_URL;

  async function handleFetch() {
    try {
      let result = await axios.get(`${urlKey}/songs/${id}`);

      console.log(result.data);

      const { name, artist, album, time, is_favorite } = result.data;

      setNameState(name);
      setArtistState(artist);
      setAlbumState(album);
      setTimeState(time);
      setIsFavoriteState(is_favorite);
    } catch (e) {
      console.log(e);
    }
  }

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      await axios.put(`${urlKey}/songs/${id}`, {
        name: nameState,
        artist: artistState,
        album: albumState,
        time: timeState,
        is_favorite: isFavoriteState,
      });

      navigate("/songs");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="mx-3">
      <div>
        <h1>Edit</h1>
      </div>

      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Song Name:</label>
          <br />
          <input
            type="text"
            value={nameState}
            onChange={(e) => setNameState(e.target.value)}
          />
        </div>{" "}
        <div>
          <label>Artist:</label>
          <br />
          <input
            type="text"
            value={artistState}
            onChange={(e) => setArtistState(e.target.value)}
          />
        </div>
        <div>
          <label>Album:</label>
          <br />
          <input
            type="text"
            value={albumState}
            onChange={(e) => setAlbumState(e.target.value)}
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
            checked={isFavoriteState}
            onChange={() => setIsFavoriteState(!isFavoriteState)}
          />
        </div>
        <button className="mt-3 btn btn-outline-dark">Submit</button>
      </form>
    </div>
  );
}

export default EditSong;
