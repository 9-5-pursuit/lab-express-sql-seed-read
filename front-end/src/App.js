import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Songs from "./components/Songs/Songs";
import Song from "./components/Song/Song";
import Nav from "./components/Nav/Nav";
import NewSong from "./components/NewSong/NewSong";
import EditSong from "./components/EditSong/EditSong";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/:id" element={<Song />} />
          <Route path="/songs/:id/edit" element={<EditSong />} />
          <Route path="/create-song" element={<NewSong />} />
          <Route path="/404" element={<h1>404 Not found!</h1>} />
          <Route path="*" element={<h1>404 Not found!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
