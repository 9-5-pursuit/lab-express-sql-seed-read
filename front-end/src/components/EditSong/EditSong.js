import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {getSongById, updateSongById} from '../Api/Api'

import './EditSong.css'



function EditSong() {
  
  const { id } = useParams();

  const Navigate = useNavigate()

  const [data, setData] = useState({
    title: "",
    artist: "",
    album: "",
    time: 0,
    is_favorite: false,
  })

 



   useEffect(() => {

    async function handleSongdata(){
        try {
            let result = await getSongById(id)
           setData(result.data)
    
    
        } catch (error) {
            console.log(error)
        }
       }

    handleSongdata()
   }, [])



   async function handleOnSubmit ( event ){
    event.preventDefault()
    try {
        await updateSongById(id, data)
        alert ("Song Update Successful")
        Navigate(-1)
    } catch (error) {
        console.log(error)
        
    }
   }
   

    
    return (
    <div className='edit-container'>
        <h2>Edit Song</h2>
        <div className='edit-form'>
            <form onSubmit={handleOnSubmit}>
                <div className='edit-input'>
                    <label>Song's Title</label>
                    <input type='text'
                    value={data.title}
                    onChange={(e)=>setData({...data, title: e.target.value})} />
                </div>
                <div  className='edit-input'>
                    <label>Artist's Name</label>
                    <input type='text'
                    value={data.artist}
                    onChange={(e)=>setData({...data, artist: e.target.value})} />
                </div>
                <div  className='edit-input'>
                    <label>Album </label>
                    <input type='text'
                    value={data.album}
                    onChange={(e)=>setData({...data, album: e.target.value})} />

                </div>
                <div  className='edit-input'>
                    <label>Song's Length</label>
                    <input type='number'
                    value={data.time}
                    onChange={(e)=>setData({...data, time: e.target.value})} />
                </div>
                <div  className='edit-checkbox'>
                    <label>Favorite Song</label>
                    <input type='checkbox'
                    value={data.is_favorite}
                    onChange={()=>setData({...data,  is_favorite: !data.is_favorite})} />
                </div>
              
                <button>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default EditSong