import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Songs from "./components/Songs";
import Song from "./components/Song";
import NewSong from "./components/NewSong";
import EditSong from "./components/EditSong";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/songs/:id" element={<Song />} />
        <Route path="/songs/new" element={<NewSong />} />
        <Route path="/songs/:id/edit" element={<EditSong />} />
      </Routes>
    </Router>
  );
}

export default App;
