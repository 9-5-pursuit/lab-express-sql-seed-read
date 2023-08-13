import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditSong() {
    const initialFormData = {
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
    };
    const { id } = useParams();
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();

    const url = process.env.REACT_APP_API_URL;
    async function fetchData() {
        try {
            let res = await axios.get(`${url}/songs/${id}`);
            setFormData(res.data);
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        fetchData();
    }, []);
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.put(`${url}/songs/${id}`, formData);
            setFormData(initialFormData);
            alert(`Song has been edited`);
            navigate(`/songs/${id}`);
        } catch (e) {
            alert(e.response.data.error);
        }
    };
    return (
        <div>
            <h1>Edit Song</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Song Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        required
                    />
                </div>
                <div>
                    <label htmlFor="artist">Artist: </label>
                    <input
                        id="artist"
                        type="text"
                        name="artist"
                        value={formData.artist}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        required
                    />
                </div>
                <div>
                    <label htmlFor="album">Album: </label>
                    <input
                        id="album"
                        type="text"
                        name="album"
                        value={formData.album}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>
                <div>
                    <label htmlFor="time">Time: </label>
                    <input
                        id="time"
                        type="text"
                        name="time"
                        value={formData.time}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.value,
                            }))
                        }
                    />
                </div>
                <div>
                    <label htmlFor="is_favorite">Favorite: </label>
                    <input
                        id="is_favorite"
                        type="checkbox"
                        name="is_favorite"
                        checked={formData.is_favorite}
                        onChange={(e) =>
                            setFormData((prevFormData) => ({
                                ...prevFormData,
                                [e.target.name]: e.target.checked,
                            }))
                        }
                    />
                </div>
                <button type="submit">Submit</button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }}
                >
                    Go Back
                </button>
            </form>
        </div>
    );
}

export default EditSong;
