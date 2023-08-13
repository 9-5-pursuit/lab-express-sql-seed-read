import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <header className="d-flex align-items-center justify-content-center p-4 bg-success">
            Tuner App - <Link to="/songs">View Songs</Link> -{" "}
            <Link to="/songs/new">New Song</Link>
        </header>
    );
}

export default Nav;
