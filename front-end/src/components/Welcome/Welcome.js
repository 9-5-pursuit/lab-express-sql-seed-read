import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TunerAppIcon from "../../Images/TunerAppIcon.gif";
function Welcome() {
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const results = await axios.get(`${process.env.REACT_APP_API_URL}`);
      //console.log(results.data);
      setMessage(results.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="container my-5">
      <div className="p-5 text-center bg-body-tertiary rounded-3">
        <img
          src={TunerAppIcon}
          alt="Logo"
          width={"200"}
          height={"200"}
          className="rounded-3"
        />
        <br />
        <h1 className="text-body-emphasis">{message}</h1>
        <br />
        <div className="container">
          <button
            className="btn btn-primary"
            onClick={() => navigate("/songs")}
          >
            See All Songs
          </button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
