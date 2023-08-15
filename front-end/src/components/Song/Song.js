import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import Playlists from '../Playlists/Playlists'
import {getSongById, deleteSongById} from '../Api/Api'

import './Song.css'

function Song() {
  
  const { id } = useParams();

  const [data, setData] = useState(null);

  const navigate = useNavigate()

  

  useEffect(() => {
    fetchSongData()
  }, [])
  
  
  async function fetchSongData(){
    try {
        let result = await getSongById(id)
        setData(result.data)
        console.log(result.data)
    } catch (error) {
        console.log(error)
    }
  }
  function handleNavigateHome(){
    navigate("/songs")

  }
  async function deleteSong (id){
    try {
        await deleteSongById(id)
        alert (`Song: ${data?.title} has been deleted`)
        navigate("/songs")
    } catch (error) {
        console.log(error)
    }
  }

  function handlesSongEdit(id){
    navigate(`/songs/${id}/edit`)
  }

    return (
    <div>
        <h2>Song Info</h2>
        <div className='song-container' key = {data?.id}>
            <p> Song name: {data?.title}</p> 
            <p> Artist: {data?.artist}</p>
            <p> Album: {data?.album}</p>
            <p> Time: {data?.time}</p>
            <p> Loved it: {data?.is_favorite ? "⭐️" : "🚮"}</p>
            <div className='song-button-navigate'>
                <ul>
                    <li>
                        <button onClick={handleNavigateHome}>Back to Songs</button>
                    </li>
                    <li>
                        <button onClick={()=> handlesSongEdit(id)}>Edit Song</button>
                    </li>
                    <li>
                        <button onClick={()=> deleteSong(id)}>Delete Song</button>
                    </li>
                </ul>
            </div>
            </div>
            <Playlists />

        </div>
  )
}

export default Song