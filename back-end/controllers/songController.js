const express = require("express");
const router = express.Router();
const { getAllSongs, getSongById, createSongId, deleteSongById, updateSongById } = require("../queries/songs");

const { checkArtist, checkSongTitle, } = require("../validations/checksongs")

const playlistController = require("./playlistController")
router.use("/:songId/playlist", playlistController)



router.get("/",async (req,res)=>{
    try {
        const allSongs = await getAllSongs();
        if(allSongs[0]){
            res.json(allSongs)
        }else{
            res.status(500).json({error:"Server error"})
        }
    } catch (error) {
        console.log(error)
        
    }
})

router.get("/:id", async(req, res)=>{
    
        const id = req.params.id
        const oneSong = await getSongById(id);
        if(!oneSong){
            res.status(500).json({error:"song id is invalid"})
        }else{
            res.json(oneSong[0])
        }
   
})
router.post("/", checkArtist, checkSongTitle, async (req,res)=>{
    const newSongbyId = await createSongId(req.body)
    res.json(newSongbyId)
})
router.delete("/:id", async (req, res)=>{
    const deletedSongId = await deleteSongById(req.params.id)
   
    if(deletedSongId === 0){
        res.status(400).json({error:"id is invalid"})
    } else {
        res.json(deletedSongId)
    }
   
    
})
router.put("/:id", async(req,res)=>{
    const updatedSongById = await updateSongById(req.params.id, req.body)
     if(updateSongById === 0){
        res.status(400).json({error:"id is invalid"})
     } else {
        res.json(updatedSongById)
     }
    
})


module.exports=router