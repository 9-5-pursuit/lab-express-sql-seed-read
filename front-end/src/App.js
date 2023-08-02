import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import axios from "axios";
import SongsList from "./Components/SongsList/SongsList";
import NavBar from "./Components/NavBar/NavBar";
import SongDetails from "./Components/SongDetails/SongDetails";
import NewSong from "./Components/NewSong/NewSong";
import EditSong from "./Components/EditSong/EditSong";

import { SongsListContent } from "./Components/Context/Context";
import { useNavigate } from "react-router-dom";
import "./index.css";

function App() {
  const [allSongs, setAllSongs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchSongs();
  }, []);

  async function fetchSongs() {
    try {
      let result = await axios.get("http://localhost:3001/songs");
      setAllSongs(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleDelete(songId) {
    const updatedAllSongs = allSongs.filter((item) => item.id !== songId);
    setAllSongs(updatedAllSongs);
    navigate("/songs");
  }

  return (
    <div>
      <NavBar />
      <SongsListContent.Provider
        value={{
          allSongs,
          setAllSongs,
          handleDelete,
        }}
      >
        <Routes>
          <Route path="/songs" element={<SongsList />} />
          <Route path="/songs/:id" element={<SongDetails />} />
          <Route path="/songs/new" element={<NewSong />} />
          <Route path="/songs/:id/edit" element={<EditSong />} />
        </Routes>
      </SongsListContent.Provider>
    </div>
  );
}

export default App;
