import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Playlist from './Playlist'

import { PlaylistContext } from '../context/context'
import {getSongPlaylistApi, updatePlaylistApi, deletedPlaylistApi} from '../Api/Api'

import './Playlists.css'

const API = process.env.REACT_APP_API_URL;
function Playlists() {
  
  const [playlist, setPlaylist] = useState([]);

  const [viewEditToggleForm, setViewEditToggleForm] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    fetchSongPlaylist()
  }, [id, API]);
  
  async function fetchSongPlaylist() {
    try {
        let result = await getSongPlaylistApi(id)
        console.log(result)
        setPlaylist(result.data)
    } catch (e) {
        console.log(e)
    }
  }
 
  async function handleEditPlaylist (updatedPlaylist){
    try {
        let result = await updatePlaylistApi(
            id,
            updatedPlaylist.id,
            updatedPlaylist
        )

        const copiedPlaylist = [...playlist];

        const indexUpdatePlaylist = copiedPlaylist.findIndex((item) => {
            return item.id === updatedPlaylist.id
        });

        copiedPlaylist[indexUpdatePlaylist] = result.data
        setPlaylist(copiedPlaylist)
    } catch (error) {
        console.log(error)
    }
  }
  async function handlesDelete (id) {
    try {
        await deletedPlaylistApi(id)
        let filteredArray = playlist.filter((item) => item.id !== id )
        setPlaylist(filteredArray)
    } catch (error) {
        console.log(error)
        
    }
  }
    return (
    <section className='Playlists'>
        <h2>Song Appears On Playlist:</h2>
       
        {playlist.map(item => {
            return (
                <PlaylistContext.Provider
                value={{
                    fromParentPlaylistsHandleSubmit: handleEditPlaylist,
                    playlist: item,
                    handlesDelete: handlesDelete,
                    viewEditToggleForm: viewEditToggleForm,
                    setViewEditToggleForm: setViewEditToggleForm,
                }}
                key={item.id}>
                    <Playlist />
                </PlaylistContext.Provider>
            )
        })}

    </section>
  )
}

export default Playlists