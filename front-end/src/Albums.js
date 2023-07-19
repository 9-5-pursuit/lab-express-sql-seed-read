import React, { useState } from "react";
import AlbumTable from "./AlbumTable";

const Albums = () => {
    const [showTable, setShowTable] = useState(false);

    const handleBadgeClick = () => {
        setShowTable(!showTable);
    };

    return (
        <div className="container mt-4">
            <h2>Albums Table</h2>
            <button
                className="btn btn-primary btn-lg"
                onClick={handleBadgeClick}
                style={{ cursor: "pointer" }}
            >
                Click to Toggle Table
            </button>
            <AlbumTable isVisible={showTable} />
        </div>
    );
};

export default Albums;