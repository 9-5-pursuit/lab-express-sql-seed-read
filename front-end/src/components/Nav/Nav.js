import React from "react";
import { useNavigate } from "react-router-dom";
function Nav() {
  const navigate = useNavigate();
  return (
    <nav
      className="navbar navbar-expand-lg bg-gradient"
      style={{ backgroundColor: "#d90f92" }}
    >
      <div className="container-fluid">
        <button className="btn d-flex fs-4" onClick={() => navigate("/songs")}>
          Home
        </button>
        <header className="d-flex  py-3 navbar-brand">
          <h1 className="fs-1">🎵 Tuner 🎵</h1>
        </header>

        <button
          className="btn d-flex fs-4"
          onClick={() => navigate("/new-song")}
        >
          Create Song
        </button>
      </div>
    </nav>
  );
}

export default Nav;
