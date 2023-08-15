import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import CreateSong from './components/CreateSong/CreateSong'
import Songs from './components/Songs/Songs'
import Song from './components/Song/Song'
import EditSong from './components/EditSong/EditSong'


function App() {
  return (
    <div className="">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/songs' element={<Songs />} />
          <Route path='/songs/new' element={<CreateSong />} />
          <Route path='/songs/:id' element={<Song />} /> 
          <Route path='/songs/:id/edit' element={<EditSong />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
