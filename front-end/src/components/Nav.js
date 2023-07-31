import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <p>
        <Link to="/">Tuner App</Link>
      </p>

      <p>
        <Link to="/songs">See All Songs</Link>
      </p>
      <button>
        <Link to="/songs/new">New Song</Link>
      </button>
    </div>
  );
}

export default Nav;
