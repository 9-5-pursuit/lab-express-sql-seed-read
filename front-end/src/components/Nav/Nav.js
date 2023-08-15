import React from 'react'
import {Link} from 'react-router-dom'
import "./Nav.css"
function Nav() {
  return (
   <header className="header-container">
    <nav className="header-container__nav">
     
     <Link to="/"><img src='./favicon.ico' alt=''/></Link>
   
    <p>Welcome to the Tuner App</p>
        <ul>
            
            <li>
               <Link to="/"> Home </Link>
            </li>
            <li>
               <Link to="/songs">Songs</Link>
            </li>
            <li>
               <Link to="/songs/new">Add A New Song</Link>
            </li>
            
        </ul>
    </nav>
   </header>
  )
}

export default Nav