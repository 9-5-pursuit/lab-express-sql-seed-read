const express = require('express');
const { selectAlbums, makeAlTabl } = require('../queries/songs');
const router = express.Router();

router.get('/', async(req, res, next) => {
    if(req.query.album && req.query.artist) {
        const getSongs = await makeAlTabl(req.query.album, req.query.artist);
        if (getSongs[0]) res.json(getSongs);
        else res.redirect('/notfound')
    } else next()
})
router.get('/', async(req, res) => {
    const getAlbum = await selectAlbums();
    if (getAlbum[0]) res.json(getAlbum);
    else res.redirect('/notfound')

})

module.exports = router;