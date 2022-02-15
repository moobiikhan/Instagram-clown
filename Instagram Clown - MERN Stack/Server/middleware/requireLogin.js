const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../keys")
const mongoose = require("mongoose")
const User = mongoose.model("User");


module.exports = (req,res,next)=>{
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error: "You must login to access this page"})
    }
    // authorization == Bearer asdhiufhsdjkjv {token after bearer}
    const token = authorization.replace("Bearer ","")
    // varifying the token we saved in keys
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
            // status 401 means unauthorized access
            return res.status(401).json({ error: "You must login to access this page"})
        }
        const {_id} = payload
        User.findById(_id).then((userdata)=>{
            req.user = userdata
            // this code will take abit long
            //putting next inside bcs outside next will work without waiting for this code to complete
            next()
        })
        
    })
    
}