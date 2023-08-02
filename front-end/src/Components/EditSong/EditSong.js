import React, { useState, useContext, useEffect } from "react";
import { SongsListContent } from "../Context/Context";
import { useParams, useNavigate } from "react-router-dom";

function EditSong() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [songInfo, setSongInfo] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  const { allSongs } = useContext(SongsListContent);

  useEffect(() => {
    if (id.length === 1) {
      const foundSong = allSongs.find((item) => item.id === Number(id));
      setSongInfo(foundSong);
    } else {
      const foundSong = allSongs.find((item) => item.id === id);
      setSongInfo(foundSong);
    }
  }, [allSongs, id]);

  function handleEdit(e) {
    e.preventDefault();
    const updatedSong = {
      ...songInfo,
    };

    if (id.length === 1) {
      const find_Index = allSongs.findIndex((item) => item.id === Number(id));
      allSongs[find_Index] = updatedSong;
    } else {
      const find_Index = allSongs.findIndex((item) => item.id === id);
      allSongs[find_Index] = updatedSong;
    }
    navigate("/songs");
  }
  function handleFavChange() {
    setSongInfo((prevState) => ({
      ...prevState,
      is_favorite: !prevState.is_favorite,
    }));
  }

  return (
    <div className="form-container">
      <form onSubmit={handleEdit}>
        <h3>Edit Song</h3>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            id="name"
            value={songInfo.name}
            onChange={(e) => setSongInfo({ ...songInfo, name: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Artist:</label>
          <input
            type="text"
            id="artist"
            value={songInfo.artist}
            onChange={(e) =>
              setSongInfo({ ...songInfo, artist: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Album:</label>
          <input
            type="text"
            id="album"
            value={songInfo.album}
            onChange={(e) =>
              setSongInfo({ ...songInfo, album: e.target.value })
            }
            required
          />
        </div>

        <div className="form-group">
          <label>Duration:</label>
          <input
            type="text"
            id="time"
            value={songInfo.time}
            onChange={(e) => setSongInfo({ ...songInfo, time: e.target.value })}
            required
          />
        </div>
        <div className="form-group">
          <label>Favorite:</label>
          <input
            type="checkbox"
            id="is_favorite"
            value={songInfo.is_favorite}
            onChange={handleFavChange}
            checked={songInfo.is_favorite}
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditSong;
