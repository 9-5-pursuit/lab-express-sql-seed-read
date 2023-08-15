import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <>
      <h2>Welcome to Tuner App</h2>

      <div className="home">
        <Link to={"/songs"}> Songs List</Link>
      </div>
    </>
  );
}

export default Home;
