import React from "react";
import { Link, useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();

  function handleNewSong() {
    navigate("songs/new");
  }
  return (
    <div className="home">
      <h2>Welcome to Tuner App</h2>
      <Link to={"/songs"}>
        {" "}
        <h4>Songs List</h4>
      </Link>
    </div>
  );
}

export default Home;
