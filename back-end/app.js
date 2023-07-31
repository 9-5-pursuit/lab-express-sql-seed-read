const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const songController = require('./controllers/songController')
const albumController = require('./controllers/albumController')
const playlistController = require('./controllers/playlistController')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/songs', songController)
app.use('/albums', albumController)
app.use('/playlist', playlistController)

app.get('/', (req, res) => { res.send('welcome to Turner') })
app.get('/notfound', (req, res) => { res.status(404).send('invalid request') })

app.get('*', (req, res) => {
    res.send('page not found!')
})

module.exports = app;