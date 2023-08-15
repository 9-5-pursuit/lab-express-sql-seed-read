const express= require('express')
const router = express.Router({mergeParams: true})
const { getAllSongsPlaylist, getPlaylistBySongId,  createSongsPlaylist, deleteSongPlaylist, updatePlaylist} = require('../queries/playlists')


router.get('/', async (req, res) => {
    try {
        const allPlaylists = await getAllSongsPlaylist(req.params.songId)
        if(allPlaylists[0]){
            res.json(allPlaylists)
        }else{
            res.status(404).json({error: 'List Not Found'})
        }
    } catch (e) {
        console.log(e)
    }
});

router.get('/:songId', async (req,res)=> {
    try {
        const songPlaylist = await getPlaylistBySongId(req.params.songId, req.params.playistId
            )
            if (songPlaylist.length === 0) {
                throw {
                  status: 404,
                  message: "Playlist not found",
                };
              } else {
                return res.json(songPlaylist[0]);
              }
            } catch (error) {
              res.status(error.status).json({ error: error.message });
            }

});



router.post('/', async (req, res) => {
      const newPlaylist = await createSongsPlaylist(req.body)
      res.json(newPlaylist)
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params;
  
    const deletedPlaylist = await deleteSongPlaylist(id);
  
    if (deletedPlaylist.length === 0) {
      return res.status(404).json({ error: "Playlist not found" });
    } else {
      return res.json(deletedPlaylist[0]);
    }
  });

  router.put("/:id", async (req, res) => {
  const updatedPlaylist = await updatePlaylist(req.params.id, req.body)
  console.log(updatedPlaylist)
  if(updatedPlaylist.length === 0){
    return res.status(404).json({error: "No playlist entered"})
  } else {
    return res.json(updatedPlaylist[0])
  }
  });

module.exports=router