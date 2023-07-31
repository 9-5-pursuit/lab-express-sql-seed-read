const checkBoolean = (req, res, next) => {
    if(typeof req.body.is_favorite !== 'boolean') {
        res.status(400).json({err: 'is_favorite must be a boolean'})
    } else {
        next()
    }
}
// get songs ordered by name
const checkParam = (req, res, next) => {
    if(req.query.order && (req.query.order !== 'desc' || req.query.order !== 'asc')) {
        res.status(400).json({err: 'order query needs keyword'})
    } else { next() }
}

const checkPut = (req, res, next) => {
    
    let arr = Object.keys(req.body)
    if (arr.length && arr.length !== 5 || arr.length == 0) {
        res.status(400).json({err: 'make new update body'})  
    } 
    else {
    let check = true
    arr.forEach((item, i) => {
        if (i == 0) if (item !== 'name') check = false
        else if (i == 1) if (item !== 'artist') check = false
        else if (i == 2) if (item !== 'album') check = false
        else if (i == 3) if (item !== 'time') check = false
        else if (i == 4) if (item !== 'is_favorite') check = false
        
    })
    if(!check) {
        res.status(400).json({err: 'make new update body'})
    } else { next() }
}
}
const checkPost = (req, res, next) => {
    
    let arr = Object.keys(req.body)
    if (arr.length && arr.length !== 5 || arr.length == 0) {
        res.status(400).json({err: 'make new post body'})  
    } 
    else {
    let check = true
    arr.forEach((item, i) => {
        if (i == 0) if (item !== 'name') check = false
        else if (i == 1) if (item !== 'artist') check = false
        else if (i == 2) if (item !== 'album') check = false
        else if (i == 3) if (item !== 'time') check = false
        else if (i == 4) if (item !== 'is_favorite') check = false
        
    })
    if(!check) {
        res.status(400).json({err: 'make new post body'})
    } else { next() }
}
}

module.exports = { checkBoolean, checkParam, checkPut, checkPost, }