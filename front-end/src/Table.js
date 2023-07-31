import React, { useEffect, useState } from "react";
import { fetchData, fetchOrderData, setSongInfo, fetchPlay, changeFav } from "./api";
import { useNavigate } from "react-router-dom";
import { v1 as generateId } from 'uuid'

const Table = ({ play }) => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState(null);
    const [playlist, setPlaylist] = useState(null)
    const [order, setOrder] = useState(false)
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
            time: data.time,
            is_favorite: data.is_favorite,
        });
    };

    const orderTable = () => {
        let val = order ? 'desc' : 'asc'
        fetchOrderData(val).then((apiData) => { setData(apiData); setOrder(!order) })
    }

    const handleFav = (args) => {
        changeFav(args).then((apiData) => { setData(data.map(item => { if (item.id == args.id) return { ...item, is_favorite: apiData['is_favorite'] }; else return item })) })
    }

    const handleCloseModal = () => {
        setFormData(null);
    };

    useEffect(() => {
        fetchData().then((apiData) => setData(apiData));
        customLists()
    }, []);

    async function customLists() {
        if (play.length > 0) {
            let temp = []
            for (let item of play) {
                const apiData = await fetchPlay(item)
                temp.push(apiData)
            }
            setPlaylist(temp)
        }
    }

    return (
        <div className="container mt-4">
            <h2>Tuner Playlist</h2> <button onClick={() => navigate('/newplaylist')}>New Playlist</button>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th><span onClick={() => orderTable()}>Name</span><span className="large">{order ? '  a-z' : ' z-a'}</span></th>
                        <th>Artist</th>
                        <th>Album</th>
                        <th>Favorite</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.id} style={{ cursor: "pointer" }} >
                            <td><span onClick={() => handleClickTable(item)}>{item.id}</span></td>
                            <td>{item.name}<span className="small">- {item.time}</span></td>
                            <td>{item.artist}</td>
                            <td>{item.album}</td>
                            <td><span onClick={() => handleFav(item)} className="text-underline">{item.is_favorite ? 'yes' : 'no'}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {play.length > 0 && <h2>custom playlists</h2>}
            {playlist && playlist.map((item, i) => {
                return (<div className="">
                    <h2>{play[i]}</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr key={`playh-${i}`}>
                                <th>Name</th>
                                <th>Artist</th>
                                <th>Album</th>
                            </tr>
                        </thead>
                        <tbody>
                            {item.map((row, i) => (
                                <tr key={`play-${row.id}`}>
                                    <td>{row.name}</td>
                                    <td>{row.artist}</td>
                                    <td>{row.album}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>)
            })}
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
