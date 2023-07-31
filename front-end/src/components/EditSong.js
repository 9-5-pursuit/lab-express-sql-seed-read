import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditSong() {
  const [song, setSong] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
  });
  const { id } = useParams();
  let api = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    fetchSongsById();
  }, []);

  async function fetchSongsById() {
    try {
      let result = await axios.get(`${api}/songs/${id}`);

      setSong(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleTextChange(event) {
    setSong({ ...song, [event.target.id]: event.target.value });
  }

  function handleCheckboxChange(event) {
    setSong({ ...song, [event.target.id]: event.target.checked });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await axios.put(`${api}/songs/${id}`, song);

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
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={song.name}
            onChange={handleTextChange}
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
            onChange={handleTextChange}
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
            onChange={handleTextChange}
          />
        </div>

        <div>
          <label htmlFor="time">Time</label>
          <input
            type="type"
            id="time"
            name="time"
            value={song.time}
            onChange={handleTextChange}
          />
        </div>

        <div>
          <label htmlFor="is_favorite">Favorite</label>
          <input
            type="checkbox"
            id="is_favorite"
            name="is_favorite"
            checked={song.is_favorite}
            onChange={handleCheckboxChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default EditSong;
