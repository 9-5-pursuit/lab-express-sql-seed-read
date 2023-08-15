import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav">
      <div className="navigation">
        <Link to={"/songs"}>
          {" "}
          <h1 className="logo">Tuner App</h1>
        </Link>
        <div className="menu">
          <Link to={"/songs/new"}>New Song</Link>
          <Link to={"/songs/signIn"}>Sign In</Link>
          <Link to={"/songs/signUp"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
