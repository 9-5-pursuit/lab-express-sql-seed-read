import React from "react";
import { Link } from "react-router-dom";
import NavButtons from "./NavButtons";

function Nav() {
  return (
    <nav className="navbar bg-body-tertiary container">
      <div className="container-fluid">
        <Link to={"/transactions"} className="navbar-brand">
          <h1>Songs App</h1>
        </Link>
        <NavButtons />
      </div>
    </nav>
  );
}

export default Nav;
