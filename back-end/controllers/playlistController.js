const express = require('express');
const { getPlaylist, newPlaylist, newPlaylistItem, delPlaylistRow } = require('../queries/songs');
const router = express.Router();

router.get('/get/:name', async(req, res) => {
        const getTabl = await getPlaylist(req.params.name);
        if (getTabl[0]) res.status(200).json(getTabl);
        else res.redirect('/notfound')
})
router.post('/new/:name', async(req, res) => {
        const makeTabl = await newPlaylist(req.params.name);
        if (!makeTabl.hasOwnProperty('severity')) res.status(201).json({ response: makeTabl});
        else res.redirect('/notfound')
})
router.post('/addSong', async(req, res) => {
    const newRow = await newPlaylistItem(req.body);
    if (newRow[0]) res.status(201).json(newRow);
    else res.redirect('/notfound')
})
router.delete('/', async(req, res) => {
    const status = await delPlaylistRow(req.query.name, req.query.id);
    if (status[0]) res.json(status[0]);
    else res.redirect('/notfound')
})

module.exports = router;