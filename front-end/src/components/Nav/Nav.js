import React from 'react';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <header>
      <nav>
            <Link className="navlink" to="/songs">
              <h1>Tuner</h1>
            </Link>
      </nav>
    </header>
  );
}

export default Nav