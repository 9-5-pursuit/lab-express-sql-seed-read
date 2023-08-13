import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Songs() {
    const { id } = useParams();
    const [song, setSong] = useState({});
    const navigate = useNavigate();
    const url = process.env.REACT_APP_API_URL;
    useEffect(() => {
        fetchSong();
    }, []);
    const fetchSong = async () => {
        try {
            const response = await axios.get(url + "/songs/" + id);
            const data = response.data;
            setSong(data);
        } catch (error) {
            console.error("Error fetching bookmarks:", error);
        }
    };

    const deleteSong = async () => {
        try {
            const response = await axios.delete(url + "/songs/" + id);
            const data = response.data[0];
            //alert(`The song named ${data.name} has been deleted`);
            navigate("/songs");
        } catch (error) {
            console.error("Error deleting song:", error);
        }
    };

    return (
        <div>
            <ul>
                {song && (
                    <>
                        <div className="Song-Details">
                            <p>Name: {song.name}</p>
                            <p>Artist: {song.artist}</p>
                            <p>Album: {song.album}</p>
                            <p>Time: {song.time}</p>
                            <p>Favorite: {song.is_favorite && "⭐️"}</p>
                            <button
                                onClick={() =>
                                    navigate(`/songs/${song.id}/edit`)
                                }
                            >
                                Edit
                            </button>
                            <button onClick={() => deleteSong()}>Delete</button>
                            <button onClick={() => navigate(-1)}>
                                Go Back
                            </button>
                        </div>
                    </>
                )}
            </ul>
        </div>
    );
}

export default Songs;
