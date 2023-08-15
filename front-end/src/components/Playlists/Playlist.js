import React,  {useContext} from 'react'
import { PlaylistContext } from '../context/context'

import './Playlists.css'

function Playlist() {
  
  const {
    playlist,
    handlesDelete,
  
}=useContext(PlaylistContext)


  
    return (
    <div className='Playlist'>
        
        
            <div> 
                <h4>Playlist:</h4>
                <p>{playlist.name}</p> 
                <h4>Genre:</h4>
                <p>{playlist.genre}</p>
                
            
            <button onClick={()=>handlesDelete(playlist.id)}>Delete Song From Playlist</button>
            </div>
        
        
    </div>
  )
}

export default Playlist