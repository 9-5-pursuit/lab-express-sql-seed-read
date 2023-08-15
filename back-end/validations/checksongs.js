const checkSongTitle = (req, res, next) => {
    if (!req.body.title){
        res.status(400).json({error:"Please enter song title"})

    }else{
        next()
    }
}
const checkArtist = (req, res, next) => {
    if (!req.body.artist){
        res.status(400).json({error:"Please add artist's name"})

    }else{
        next()
    }
}
// const checkTime = (req, res, next) => {
//     if (typeof req.body.time !== "int"){
//         res.status(400).json({error:"improper format"})

//     }else{
//         next()
//     }
// }

module.exports={
    checkSongTitle,
    checkArtist,
    
}