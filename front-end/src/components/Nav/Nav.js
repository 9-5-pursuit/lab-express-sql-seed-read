import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <div>
        <span className="visually-hidden">Tuner App</span>
        <img
          src="https://fontmeme.com/permalink/230810/34572fd6aa1621dda16de29e0790702c.png"
          alt="tuner-logo"
        />
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
