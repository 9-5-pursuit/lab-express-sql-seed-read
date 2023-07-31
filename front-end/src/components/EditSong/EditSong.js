import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./EditSong.css";
import { Button } from "react-bootstrap";

function EditSong() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState({
     name: "",
     artist: "",
     album: "",
     time: "",
     is_favorite: false,
   });

  let url = process.env.REACT_APP_API_URL;

  useEffect(() => {
   async function getSongByID() {
     try {
       let result = await axios.get(`${url}/songs/${id}`);
       setSong(result.data);
     } catch (e) {
       console.log(e);
     }
   }

    getSongByID();
  }, [id, url]);

  async function handleOnSubmit(e) {
    e.preventDefault();

    try {
      await axios.put(`${url}/songs/${id}`, {
        ...song
      });
      alert("Updated Successfully");
      navigate(`/songs`);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="form-form-container">
      <h2>Edit</h2>
      <div className="form-container-form">
        <form onSubmit={handleOnSubmit}>
          <div className="form-container-input">
            <label htmlFor="name">Song Name:</label>
            <div>
              <input
                placeholder="Song Name"
                type="text"
                id="name"
                value={song.name}
                onChange={(e) => setSong({ ...song, name: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-container-input">
            <label htmlFor="artist">Artist</label>
            <div>
              <input
                placeholder="Artist"
                type="text"
                id="artist"
                value={song.artist}
                onChange={(e) => setSong({ ...song, artist: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-container-input">
            <label htmlFor="album">Album</label>
            <div>
              <input
                placeholder="Album"
                id="album"
                type="text"
                value={song.album}
                onChange={(e) => setSong({ ...song, album: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-container-input">
            <label htmlFor="time">Time</label>
            <div>
              <input
                placeholder="Time"
                type="text"
                id="time"
                value={song.time}
                onChange={(e) => setSong({ ...song, time: e.target.value })}
                required
              />
            </div>
          </div>

          <div className="form-container-input">
            <label htmlFor="is_favorite">Favorite</label>
            <div>
              <input
                type="checkbox"
                id="is_favorite"
                checked={song.is_favorite}
                onChange={(e) =>
                  setSong({ ...song, is_favorite: e.target.checked })
                }
              />
            </div>
          </div>

          <Button
            style={{ margin: "10px" }}
            variant="outline-secondary"
            type="submit"
          >
            <strong>SUBMIT</strong>
          </Button>
        </form>
      </div>
    </div>
  );
}

export default EditSong;
