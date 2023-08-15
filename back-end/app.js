const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const songsController = require("./controllers/songController")
const playlistController = require("./controllers/playlistController")

const app = express()

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/songs", songsController)
app.use("/playlist", playlistController)

app.get("/", (req,res)=>{
    res.send("welcome to song app")
})

module.exports=app