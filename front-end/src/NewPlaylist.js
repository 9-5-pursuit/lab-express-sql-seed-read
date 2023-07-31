import React, { useState, useEffect, useContext } from "react";
import { fetchOrderData, newPlaylist, newPlaylistRow } from "./api";
import { TableContext } from "./components/context";

const NewPlaylist = () => {

    const { changePlay, play } = useContext(TableContext)
    const [formData, setFormData] = useState({
        name: "",
        selectedOptions: [],
    });
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchOrderData('asc').then((apiData) => setData(apiData));
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (event) => {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setFormData((prevData) => ({
            ...prevData,
            selectedOptions,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (play.includes(formData.name) || !formData.selectedOptions.length) return
        try {
            const response = await newPlaylist(formData.name)
            if (response.hasOwnProperty('response')) {
                for (let item of formData.selectedOptions) {
                    var res = await newPlaylistRow(formData.name, item)
                    if (res[0].hasOwnProperty('id')) res = true
                }

                if (res) {
                    changePlay(formData.name);
                    setFormData({
                        name: "",
                        selectedOptions: [],
                    });
                }
            } else {
                console.log("API request failed:", response);
            }
        } catch (error) {
            console.error("API request error:", error);
        }
    };

    return (
        <div className="container mt-4">
            <h2>new playlist</h2>
            {data && <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="selectOptions" className="form-label">
                        Available Songs, artists (Multiple)
                    </label>
                    <select
                        className="form-control"
                        id="selectOptions"
                        name="selectedOptions"
                        multiple
                        value={formData.selectedOptions}
                        onChange={handleSelectChange}
                    >{data.map((item, i) => {
                        return (
                            <option key={i} value={item.id}>{item.name}-{item.artist}</option>
                        )
                    })}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            }
            {play.length > 0 && (<div>
                <h2>your playlists</h2>
                <ul>
                    {
                        play.map((item, i) => {
                            return <li key={i}>{item}</li>
                        })
                    }
                </ul>
            </div>)}
        </div>
    );
};

export default NewPlaylist;