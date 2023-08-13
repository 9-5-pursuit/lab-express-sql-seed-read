import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function Songs() {
    const [songs, setSongs] = useState([]);
    const [dataReady, setdataReady] = useState(false);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchSongs = async () => {
        try {
            const url = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${url}/songs`);
            const data = response.data;
            setSongs(data);
            setdataReady(true);
            return data;
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    };

    const fetchArtists = async (id) => {
        try {
            const url = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${url}/artists/${id}`);
            const data = response.data;
            return data;
        } catch (error) {
            console.error("Error fetching songs:", error);
        }
    };
    const manageArtistAdjustment = async (songsVar) => {
        for (let i = 0; i < songsVar.length; i++) {
            //console.log(songsVar[i]);
            // let song = songs[i];
            let artist = "";
            if (songsVar[i].artist.includes(", ")) {
                artist = await fetchArtists(songsVar[i].id);
                //console.log(artist);
                let newname = [];
                for (let x = 0; x < artist.length; x++) {
                    newname.push(
                        `<Link path="/artistsSongs/">${artist[x].name}</Link>`
                    );
                    // newname +="<a href='/artists/"
                }
                //console.log(newname);
                //songsVar[i].artist.join;
                //console.log(artist);
            }
        }
    };
    // write function to pass songs through fetch artist
    const fetchData = async () => {
        let result = await fetchSongs();
        //console.log(result);
        manageArtistAdjustment(result);
        setdataReady(true);
    };
    function parsingData(name) {
        let newname;
        if (name.includes(", ")) {
            newname = name.split(", ");
            //console.log(newname);
            let string = newname.map((info, index) => {
                console.log(info);
                if (index + 1 === newname.length) {
                    return (
                        <Link key={info} to={`/artistsSongs/${info}`}>
                            {info}
                        </Link>
                    );
                } else {
                    return (
                        <Link key={info} to={`/artistsSongs/${info}`}>
                            {info},{" "}
                        </Link>
                    );
                }
            });
            return string;
        } else {
            return (
                <Link key={name} to={`/artistsSongs/${name}`}>
                    {name}
                </Link>
            );
        }
    }
    function showData() {
        return (
            <table className="Songs">
                <thead>
                    <tr>
                        <td>Song Name</td>
                        <td>Artist</td>
                        <td>Time</td>
                        <td>Favorite</td>
                    </tr>
                </thead>
                <tbody>
                    {songs &&
                        songs.map((song) => {
                            return (
                                <tr key={song.id} className="Song">
                                    <td>
                                        <Link to={`/songs/${song.id}`}>
                                            {song.name}
                                        </Link>
                                    </td>
                                    {/* <td>{parsingData(song.artist)}</td> */}
                                    <td>{song.artist}</td>
                                    <td>{song.time}</td>
                                    <td>{song.is_favorite && "⭐️"}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        );
    }
    return (
        <div>
            {songs.length === 0 && dataReady ? (
                <div>Please go add some songs to your playlist</div>
            ) : (
                showData()
            )}
        </div>
    );
}

export default Songs;
