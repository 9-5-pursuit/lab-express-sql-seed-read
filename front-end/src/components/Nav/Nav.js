import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/Users/esmeralda/Pursuit/Module-4/Labs/lab-express-sql-seed-read/front-end/src/images/tunerAppLogo Background Removed.png";
import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar">
      <div className="d-flex align-items-center">
        <NavLink to="/" className="icon">
          <img src={logo} alt="Tuner Logo" style={{ width: "150px" }} />
        </NavLink>
        <NavLink to="/" className="links">
          Tuner App
        </NavLink>
      </div>
      <div>
        <NavLink to="/songs" className="links">
          Songs
        </NavLink>
        <NavLink to="/songs/new" className="btn-link">
          New Song
        </NavLink>
      </div>
    </nav>
  );
}

export default Nav;
