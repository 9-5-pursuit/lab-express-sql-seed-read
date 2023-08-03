import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import AllSongs from "./components/AllSongs/AllSongs";
import Song from "./components/Song/Song";
import NewSong from "./components/NewSong.js/NewSong";
import UpdateSong from "./components/UpdateSong/UpdateSong";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/songs" element={<AllSongs />}></Route>
          <Route path="/songs/:id" element={<Song />}></Route>
          <Route path="/songs/:id/edit" element={<UpdateSong />}></Route>
          <Route path="/songs/new" element={<NewSong />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
