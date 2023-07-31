import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <h2>Music App</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/songs">Songs</Link>
          </li>
          <li>
            <Link to="/create-song">Create Song</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
