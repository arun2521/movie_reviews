const jwt = require('jsonwebtoken')
const authenticateToken =(req,res,next)=>{
    const authhead = req.headers['authorization']
    const token = authhead && authhead.split(" ")[1]
    if(token==null) return res.sendStatus(401)
    jwt.verify(token,process.env.SECRET,(err,user)=>{
        if(err)return res.sendStatus(403)
        req.user = user
        console.log("user in middleware,:", user)
        next()
    })
    
}
module.exports= authenticateToken