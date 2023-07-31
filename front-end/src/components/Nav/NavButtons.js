import React from "react";
import { Link } from "react-router-dom";

function NavButtons() {
  return (
    <Link to="/create-song">
      <button className="btn btn-outline-dark ms-2">New Song</button>
    </Link>
  );
}

export default NavButtons;
