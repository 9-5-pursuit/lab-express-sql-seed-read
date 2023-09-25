import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div>
        <span>Tuner App</span>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/songs">Song List</Link>
      </div>
      <div>
        <Link to="/songs/new">Add a New Song</Link>
      </div>
    </div>
  );
}

export default Nav;