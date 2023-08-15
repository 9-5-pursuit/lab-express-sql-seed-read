import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {createSongApi} from '../Api/Api'

import'./CreateSong.css'

function CreateSong() {
 
 const Navigate = useNavigate()

    const [data, setData] = useState({
    title: "",
    artist: "",
    album: "",
    time: 0,
    is_favorite: false,
}) 


  
 async function handleOnSubmit (event){
  event.preventDefault();
  try {
     await createSongApi(data)
     setData({
        title: "",
        artist: "",
        album: "",
        time: 0,
        is_favorite: false,

     })
     alert("New Song Added")
     Navigate("/songs")
  } catch (error) {
    console.log(error)
  }
 }

 
  return (
    <div className='form-container'>
    <h2> New Song</h2>
    <div className='song-form'>
        <form onSubmit={handleOnSubmit}>
            <div className='form-container-input'> 
                <label>Song's Title</label>
                <input type='text'
                value={data.title}
                onChange={(e)=>setData({...data, title: e.target.value})} />
            </div>
            <div className='form-container-input'>
                <label>Artist's Name</label>
                <input type='text'
                value={data.artist}
                onChange={(e)=>setData({...data, artist: e.target.value})} />
            </div>
            <div className='form-container-input'>
                <label>Album </label>
                <input type='text'
                value={data.album}
                onChange={(e)=>setData({...data, album: e.target.value})} />

            </div>
            <div className='form-container-input'>
                <label>Song's Length</label>
                <input type='number'
                value={data.time}
                onChange={(e)=>setData({...data, time: e.target.value})} />
            </div>
            <div className='form-container-checkbox'>
                <label>Favorite Song</label>
                <input type='checkbox'
                value={data.is_favorite}
                onChange={()=>setData({...data, is_favorite: !data.is_favorite})} />
            </div>
          
            <button>Submit</button>
        </form>
    </div>
</div>
  )
}

export default CreateSong