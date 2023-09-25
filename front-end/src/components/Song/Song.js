import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";


  
  const Song = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [song, setSong] = useState(null);
    let url = process.env.REACT_APP_API_URL;
  
    useEffect(() => {

      axios.get(`${url}/songs/${id}`)
        .then((response) => {
          console.log(response)
          setSong(response.data);
        })
        .catch((error) => {
          console.error('Error fetching song details:', error);
        });

    }, [id]);
  
    const handleDelete = () => {

      axios.delete(`${url}/songs/${id}`)
        .then(() => {
          navigate('/songs');
        })
        .catch((error) => {
          console.error('Error deleting song:', error);
        });
        
    };
  
    if (!song) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h1>Song Details</h1>
        <p>Name: {song.name}</p>
        <p>Artist: {song.artist}</p>
        <p>Album: {song.album}</p>
        <p>Time: {song.time}</p>
        <p>{song.is_favorite ? 'Favorite' : 'Not Favorite'}</p>
        <Link to="/songs">Back</Link>
        <button onClick={handleDelete}>Delete</button>
        <Link to={`/songs/${id}/edit`}>Edit</Link>
      </div>
    );
  };
  
  export default Song;
  

