import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewSong() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });

  let navigate = useNavigate();

  function handleOnChange(id, value) {
    setSong({ ...song, [id]: value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    let api = process.env.REACT_APP_API_URL;
    try {
      await axios.post(`${api}/songs`, song);

      setSong({
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

  return (
    <div>
      <h1>New</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={song.name}
            onChange={(event) =>
              handleOnChange(event.target.id, event.target.value)
            }
            required
          />
        </div>

        <div>
          <label htmlFor="artist">Artist</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={song.artist}
            onChange={(event) =>
              handleOnChange(event.target.id, event.target.value)
            }
            required
          />
        </div>

        <div>
          <label htmlFor="album">Album</label>
          <input
            type="text"
            id="album"
            name="album"
            value={song.album}
            onChange={(event) =>
              handleOnChange(event.target.id, event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="time">Time</label>
          <input
            type="type"
            id="time"
            name="time"
            value={song.time}
            onChange={(event) =>
              handleOnChange(event.target.id, event.target.value)
            }
          />
        </div>

        <div>
          <label htmlFor="is_favorite">Favorite</label>
          <input
            type="checkbox"
            id="is_favorite"
            name="is_favorite"
            checked={song.is_favorite}
            onChange={(event) =>
              handleOnChange(event.target.id, event.target.value)
            }
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default NewSong;
