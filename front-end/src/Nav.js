import React from 'react'
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
    <p>
      <Link to="/home">Home</Link>
    </p>
    <p>
      <Link to="/newplaylist">custom playlist</Link>
    </p>
  </div>
  )
}

export default Nav