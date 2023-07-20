import React, { useState, useEffect } from "react";
import { fetchAlbumData, fetchSongInfo } from './api'

const AlbumTable = ({ isVisible }) => {
    if (!isVisible) return null;
    const [data, setData] = useState(null);
    const [selectedData, setSelectedData] = useState(null);

    const handleRowClick = (data) => {
        fetchSongInfo(data).then(res => { if (res[0].hasOwnProperty('id')) setSelectedData(res) })
    };

    const handleCloseModal = () => {
        setSelectedData(null);
    };

    useEffect(() => {
        fetchAlbumData().then((apiData) => setData(apiData));
    }, []);

    return (
        <div className="container">
            <div className="table-responsive">
                <table className="table table-striped table-bordered mt-3">
                    <thead>
                        <tr>
                            <th>Album</th>
                            <th>Artist</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((item, i) => (
                            <tr key={i} onClick={() => handleRowClick(item)}>
                                <td>{item.album}</td>
                                <td>{item.artist}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {selectedData && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Tracks on {selectedData[0].album}</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <ul className="list-group list-group-flush">
                                    {selectedData.map(item => {
                                        return (
                                            <li class="list-group-item" key={item.id}>{item.name}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {selectedData && <div className="modal-backdrop fade show" onClick={handleCloseModal}></div>}
        </div>
    );
};

export default AlbumTable;