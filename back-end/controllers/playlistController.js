const express = require('express');
const { newPlaylist, newPlaylistItem } = require('../queries/songs');
const router = express.Router();

router.get('/new/:name', async(req, res) => {
        const makeTabl = await newPlaylist(req.params.name);
        if (!makeTabl.hasOwnProperty('severity')) res.json({ response: makeTabl});
        else res.redirect('/notfound')
})
router.get('/addSong', async(req, res) => {
    const newRow = await newPlaylistItem(req.query.name, req.query.id);
    if (newRow[0]) res.json(newRow);
    else res.redirect('/notfound')
})

module.exports = router;