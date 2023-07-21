import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Home from './Home';
import Nav from './Nav';
import NewPlaylist from './NewPlaylist';
function App() {

  const [play, setPlay] = useState([])

  function changePlay(args) {
    setPlay([...play, args])
  }

  return (
    <Router>
    <Nav />
    <Routes>
      <Route path='/home' element={<Home play={play}/>}/>
      <Route path='/newplaylist' element={<NewPlaylist changePlay={ changePlay } play={play}/>}/>
    </Routes>
  </Router>

  );
}

export default App;
