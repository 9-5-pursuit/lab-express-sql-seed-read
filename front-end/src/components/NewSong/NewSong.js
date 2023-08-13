import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewSong() {
    const initialFormData = {
        name: "",
        album: "",
        artist: "",
        time: "",
        is_favorite: false,
    };
    const [formData, setFormData] = useState(initialFormData);
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        setFormData(initialFormData);
        try {
            const url = process.env.REACT_APP_API_URL;
            await axios.post(`${url}/songs`, formData);
            alert(`New Song Created`);
            navigate("/songs");
        } catch (e) {
            console.log(e);
        }
    };
    return (
        <div>
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
            </form>
        </div>
    );
}

export default NewSong;
