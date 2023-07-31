import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      Nav
      <p>
        <Link to="/songs">See All Songs</Link>
      </p>
      <p>
        <Link to="/create-song">Create Song</Link>
      </p>
    </div>
  );
}

export default Nav;
