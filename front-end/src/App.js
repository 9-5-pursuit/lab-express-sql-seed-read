import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { TableContext } from "./components/context";
import { useState } from 'react'
import Home from './Home';
import Nav from './Nav';
import NewPlaylist from './NewPlaylist';
import SongCard from './SongCard';
function App() {

  const [play, setPlay] = useState([])

  function changePlay(args) {
    setPlay([...play, args])
  }

  const setShowTables = {
    play,
    setPlay,
    changePlay,
  }

  return (
    <TableContext.Provider value={setShowTables}>
    <Router>
    <Nav />
    <Routes>
      <Route path='/songs' element={<Home/>}/>
      <Route path='/songs/:id' element={<SongCard/>}/>
      <Route path='/newplaylist' element={<NewPlaylist/>}/>
    </Routes>
  </Router>
  </TableContext.Provider>

  );
}

export default App;
