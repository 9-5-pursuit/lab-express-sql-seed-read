import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Error from "./components/Error/Error";
import Song from "./components/Song/Song";
import Welcome from "./components/Welcome/Welcome";
import NewSong from "./components/NewSong/NewSong";
import EditSong from "./components/EditSong/EditSong";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/songs" element={<Home />} />
        <Route path="/songs/:id" element={<Song />} />
        <Route path="/edit-song/:id" element={<EditSong />} />
        <Route path="/new-song" element={<NewSong />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
