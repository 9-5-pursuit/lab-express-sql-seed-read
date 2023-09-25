import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditSong from "./components/EditSong/EditSong";
import NewSong from "./components/NewSong/NewSong";
import Songs from "./components/Songs/Songs";
import Song from "./components/Song/Song";
import Nav from "./components/Nav/Nav";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<h2>Tuner App!</h2>}/>
          <Route path="/songs" element={<Songs />} />
          <Route path="/songs/:id" element={<Song/>}/>
          <Route path="/songs/new" element={<NewSong/>}/>
          <Route path="/songs/:id/edit" element={<EditSong/>}/>
          <Route path="/404" element={<h1>404 Error Not Found</h1>} />
          <Route path="*" element={<h1>404 Error Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;