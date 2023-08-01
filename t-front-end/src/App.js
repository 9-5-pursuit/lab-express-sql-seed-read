import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Songs from "./components/Songs/Songs";
import Nav from "./components/Nav/Nav";
import NewSongForm from "./components/NewSongForm/NewSongForm";
import Song from "./components/Song/Song";

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
          <Route path="/songs/new" element={<NewSongForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
