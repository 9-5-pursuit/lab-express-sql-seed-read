import React, { useEffect, useState } from "react";
import { fetchData, setSongInfo, fetchPlay } from "./api";
import { useNavigate } from "react-router-dom";

const Table = ({ play }) => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState(null);
    const [playlist, setPlaylist] = useState([])
    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleRadioChange = (event) => {
        const { value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            is_favorite: value === "true",
        }));
    };
    //add new songs to playlist
    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.name === '' || formData.artist === '' || formData.album === '') return
        setSongInfo({ ...formData }).then(res => { if (res['id']) setData([...data, res]) })

    };
    const handleClickTable = (data) => {
        setFormData({
            name: "",
            artist: data.artist,
            album: data.album,
            time: new Date(),
            is_favorite: data.is_favorite,
        });
    };

    const handleCloseModal = () => {
        setFormData(null);
    };

    useEffect(() => {
        fetchData().then((apiData) => setData(apiData));
        customLists()
    }, []);

    async function customLists() {
        if (play.length > 0){ 
            for (let item of play) {
            const apiData = await fetchPlay(item)
            setPlaylist([...playlist, apiData])
            console.log(playlist)
            }
        }
    }
 
    return (
        <div className="container mt-4">
            {JSON.stringify(playlist)}
            <h2>Tuner Playlist</h2> <button onClick={() => navigate('/newplaylist/n')}>New Playlist</button>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Favorite</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} style={{ cursor: "pointer" }} onClick={() => handleClickTable(item)}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.artist}</td>
                            <td>{item.album}</td>
                            <td>{item.is_favorite ? 'yes' : 'no'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {playlist.length > 0 && <h2>custom playlists</h2>}
            { playlist.length > 0 && playlist.map((item, i) => {return (<div className="">
                <h2>{play[i]}</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Artist</th>
                        <th>Album</th>
                    </tr>
                </thead>
                <tbody>
                {item.map((row) => (
                        <tr key={row.id}>
                            <td>{row.name}</td>
                            <td>{row.artist}</td>
                            <td>{row.album}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>)})}
            {formData && (
                <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">add a song</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="input1" className="form-label">
                                            name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="input1"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="input2" className="form-label">
                                            artist
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="input2"
                                            name="artist"
                                            value={formData.artist}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="input3" className="form-label">
                                            album
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="input3"
                                            name="album"
                                            value={formData.album}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-check-label">is favorite?:</label>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="is_favorite"
                                                id="radioTrue"
                                                value="true"
                                                checked={formData.is_favorite === true}
                                                onChange={handleRadioChange}
                                            />
                                            <label className="form-check-label" htmlFor="radioTrue">
                                                True
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="is_favorite"
                                                id="radioFalse"
                                                value="false"
                                                checked={formData.is_favorite === false}
                                                onChange={handleRadioChange}
                                            />
                                            <label className="form-check-label" htmlFor="radioFalse">
                                                False
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Submit
                                    </button>
                                </form>
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
            {formData && <div className="modal-backdrop fade show" onClick={handleCloseModal}></div>}
        </div>
    );
};

export default Table;
