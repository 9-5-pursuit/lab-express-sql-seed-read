const express = require('express');
const { getAllSongs, getSongsOrdered, getOneSong, makeAlTabl, addRow, deleteRow, updateRow } = require('../queries/songs');
const { checkParam, checkBoolean, checkPost, checkPut } = require('../validations/crudValidation')
const router = express.Router();


router.get('/', async(req, res, next) => {
    const order = req.query.order
    if(order == 'desc' || order == 'asc') {
        const sortedSongs = await getSongsOrdered(order);
        if (sortedSongs[0]) res.json(sortedSongs);
        else res.status(500).json({err: 'pg error'})
    } else {
        next()
    }
})
router.get('/', checkParam, async(req, res) => {
    const allSongs = await getAllSongs();
    if (allSongs[0]) res.json(allSongs);
    else res.status(500).json({err: 'pg error'})
})

router.get('/:id', async(req, res) => {
    const id = req.params.id
    const allSongs = await getOneSong(id);
    if (allSongs[0]) res.json(allSongs);
    else res.redirect('/notfound')
})

router.post('/', checkBoolean, checkPost, async(req, res) => {
    const newRow = await addRow(Object.values(req.body));
    if (newRow[0]) res.json(newRow[0]);
    else res.status(500).json({err: 'pg error'})
})

router.delete('/:id', async(req, res) => {
    const id = req.params.id
    const status = await deleteRow(id);
    if (status[0]) res.json(status[0]);
    else res.redirect('/notfound')
})

router.put('/:id', checkPut, async(req, res) => {
    const id = req.params.id
    const updated = await updateRow(id, Object.values(req.body));
    if (updated[0]) res.json(updated[0]);
    else res.status(500).json({err: 'pg error'})
})

module.exports = router;