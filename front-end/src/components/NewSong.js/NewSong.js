import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./NewSong.css";

function NewSong() {
  let navigate = useNavigate();
  const [newSong, setNewSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  console.log(newSong);

  async function createNewSong(e) {
    e.preventDefault();

    try {
      const API = process.env.REACT_APP_API_URL;

      await axios.post(`${API}/songs`, newSong);

      setNewSong({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
      });

      navigate("/songs");
    } catch (error) {
      console.log(error);
    }
  }

  function handleOnChange(id, value) {
    setNewSong({ ...newSong, [id]: value });
  }

  return (
    // <div>
    //   <form onSubmit={createNewSong}>
    //     <div>
    //       <label>Name</label>
    //       <input
    //         required
    //         type="text"
    //         name="name"
    //         id="name"
    //         onChange={(e) => handleOnChange(e.target.id, e.target.value)}
    //         value={newSong.name}
    //       ></input>
    //     </div>
    //     <div>
    //       <label>Artist</label>
    //       <input
    //         required
    //         type="text"
    //         name="artist"
    //         id="artist"
    //         onChange={(e) => handleOnChange(e.target.id, e.target.value)}
    //         value={newSong.artist}
    //       ></input>
    //     </div>
    //     <div>
    //       <label>Album</label>
    //       <input
    //         required
    //         type="text"
    //         name="album"
    //         id="album"
    //         onChange={(e) => handleOnChange(e.target.id, e.target.value)}
    //         value={newSong.album}
    //       ></input>
    //     </div>
    //     <div>
    //       <label>Time</label>
    //       <input
    //         required
    //         type="text"
    //         name="time"
    //         id="time"
    //         onChange={(e) => handleOnChange(e.target.id, e.target.value)}
    //         value={newSong.time}
    //       ></input>
    //     </div>
    //     <div>
    //       <label>Favorite</label>
    //       <input
    //         required
    //         type="checkbox"
    //         name="is_favorite"
    //         id="is_favorite"
    //         onChange={(e) => handleOnChange(e.target.id, e.target.checked)}
    //         value={newSong.favorite}
    //       ></input>
    //     </div>
    //     <button>Submit</button>
    //   </form>
    // </div>
    <div className="container mt-5">
      <h2>Index</h2>

      <div className="card">
        <div className="card-body">
          <form onSubmit={createNewSong}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="name"
                onChange={(e) => handleOnChange(e.target.id, e.target.value)}
                value={newSong.name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="artist" className="form-label">
                Artist
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="artist"
                onChange={(e) => handleOnChange(e.target.id, e.target.value)}
                value={newSong.artist}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="album" className="form-label">
                Album
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="album"
                onChange={(e) => handleOnChange(e.target.id, e.target.value)}
                value={newSong.album}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="time" className="form-label">
                Time
              </label>
              <input
                required
                type="text"
                className="form-control"
                id="time"
                onChange={(e) => handleOnChange(e.target.id, e.target.value)}
                value={newSong.time}
              />
            </div>
            <div className="mb-3">
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="is_favorite"
                  onChange={(e) =>
                    handleOnChange(e.target.id, e.target.checked)
                  }
                  value={newSong.favorite}
                />
                <label className="form-check-label" htmlFor="is_favorite">
                  Favorite
                </label>
              </div>
            </div>
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewSong;
