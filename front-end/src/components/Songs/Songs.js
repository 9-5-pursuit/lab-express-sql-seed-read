import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import { getAllSongs } from '../Api/Api'

import './Songs.css'
function Songs() {
  
   
  
    const [songsArray, setSongsArray] = useState([])
  
    useEffect(() => {
        fetchSongs()
    }, [])
    
    async function fetchSongs(){
        try {
            let result = await getAllSongs()
            setSongsArray(result.data)
        } catch (error) {
            console.log(error)
        }
    }
  
    return (
    <div>
        <h2>Songs List</h2>
        <div className='table-container'>
          <table id ='songs'>
            <tbody>
                <tr>
                    <th>Favorite</th>
                    <th>Song's title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Song's Duration</th>
               </tr>
             {songsArray.map(({ id, title, artist, album, time, is_favorite})=> {
                return (
                    <tr key={id}>
                        <td>
                         <Link className='songs-link' to={`/songs/${id}`}>{is_favorite ? ('⭐️'):('🚮')}</Link>
                        </td>
                        <td>
                         <Link className='songs-link' to={`/songs/${id}`}>{title}</Link>
                        </td>
                        <td>
                         <Link className='songs-link' to={`/songs/${id}`}>{artist}</Link>
                        </td>
                        <td>
                         <Link className='songs-link' to={`/songs/${id}`}>{album}</Link>
                        </td>
                        <td>
                         <Link className='songs-link' to={`/songs/${id}`}>{time}</Link>
                        </td>
                    </tr>
                )
            })}
            
            </tbody>
          </table>
        
        
         </div>
    </div>
  )
}

export default Songs