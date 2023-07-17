const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const songController = require('./controllers/songController')

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/songs', songController)

app.get('/', (req, res) => { res.send('welcome to Turner')})

app.get('*', (req, res) => {
    res.status(404).send('page not found!')
})

module.exports = app;