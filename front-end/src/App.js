import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Songs from "./components/songs/Songs";
import Song from "./components/Song/Song";
import NewSong from "./components/NewSong/NewSong";
import EditSong from "./components/EditSong/EditSong";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/:id" element={<Song />} />
          <Route path="/create-song" element={<NewSong />} />
          <Route path="/songs/:id/edit" element={<EditSong />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
