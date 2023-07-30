import React from "react";
import { useNavigate } from "react-router-dom";
function Error() {
  const navigate = useNavigate();
  return (
    <div className="container my-5">
      <div className="p-5 text-center bg-danger bg-gradient rounded-3">
        <h1>404 Page not found</h1>
        <br />
        <button className="btn btn-dark" onClick={() => navigate("/songs")}>
          Home
        </button>
      </div>
    </div>
  );
}

export default Error;
