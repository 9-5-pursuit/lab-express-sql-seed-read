import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Songs from "./components/Songs/Songs";
import Song from "./components/Song/Song";
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
                    <Route path="/songs/new" element={<NewSong />} />
                    <Route path="/songs/:id" element={<Song />} />
                    <Route path="/songs/:id/edit" element={<EditSong />} />
                    {/* <Route path="/bookmarks" element={<Bookmarks />} />
                    <Route path="/bookmark/:id" element={<Bookmark />} />
                    <Route path="/create-bookmark" element={<NewBookmark />} />
                    <Route
                        path="/bookmark/:id/edit"
                        element={<EditBookmark />}
                    /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
