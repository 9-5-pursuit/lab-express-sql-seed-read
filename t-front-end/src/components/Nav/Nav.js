import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav() {
  return (
    <header>
      <nav>
        <ul>
          <li className="nav-left">
            <Link to="/songs">
              <h1>Tuner</h1>
            </Link>
          </li>
          <li className="nav-right">
            <Link to="/songs/new">
              <h4>New</h4>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
