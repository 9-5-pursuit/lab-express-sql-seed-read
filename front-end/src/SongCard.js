import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchSongById } from './api';

const SongCard = () => {
    const { id } = useParams()
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    useEffect(() => {
        fetchSongById(id).then(res => setData(res[0])).catch(e => { throw e })
    }, [])
    return (
        <div className="card bg-primary text-white mb-4">
            {data && <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">Artist: {data.artist}</p>
                <p className="card-text">is favorite: {data.is_favorite ? 'yes' : 'no'}</p>
                <p className="card-text">Album: {data.album}</p>
                <p className="card-text">Time: {data.time}</p>
                <div className="d-grid gap-2">
                    <button className="btn btn-danger" onClick={() => navigate('/songs')}>Back</button>
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-success">Delete</button>
                </div>
            </div>}
        </div>
    );
};

export default SongCard;