import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import AllSongs from "./components/AllSongs/AllSongs";
import Song from "./components/Song/Song";
import NewSong from "./components/NewSong/NewSong";
import EditSong from "./components/EditSong/EditSong";

function App() {
  return (
    <div className="">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<AllSongs />} />
          <Route path="/songs" element={<AllSongs />} />
          <Route path="/songs/new" element={<NewSong />} />
          <Route path="/songs/:id" element={<Song />} />
          <Route path="/songs/:id/edit" element={<EditSong />} />
          <Route path="/404" element={<h1>404 Not found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
