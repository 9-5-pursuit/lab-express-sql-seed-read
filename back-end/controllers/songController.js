const express = require('express');
const { getAllSongs } = require('../queries/songs');
//const bookmark = require()
const router = express.Router();

router.get('/', async(req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) res.json(allSongs);
    else res.status(500).json({err: 'pg error'})
})

module.exports = router;