import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Songs from "./components/Songs/Songs";
import Home from "./components/Home/Home";
import Song from "./components/Song/Song";
import EditSong from "./components/EditSong/EditSong";
import Nav from "./components/Nav/Nav";
import NewSong from "./components/NewSong/NewSong";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/:id" element={<Song />} />
          <Route path="songs/edit-song/:id" element={<EditSong />} />
          <Route path="/create-song" element={<NewSong />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
