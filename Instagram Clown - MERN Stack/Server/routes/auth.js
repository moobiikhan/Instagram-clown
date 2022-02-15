const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const User = mongoose.model("User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../keys")
const requireLogin = require("../middleware/requireLogin")

router.get("/protected ",requireLogin,(req,res)=>{
    res.send("Hello User!")
})

router.post("/signup",(req,res)=>{
    //handling resquest from front end and saving data in DB and
    // showing error if any field missing
    const {name, email, password} = req.body
    if(!name || !email || !password){
        return res.status(422).json({error: "Please add all the fields!"})
    }
    
// checking emails in DB if it already exists and show error or save 
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.json({error: "User Already Exist"})
        }
        // hashing(hiding) the password using bycrypt
        bcrypt.hash(password,12)
        .then((hashedpassword)=>{
            const user = new User({
                name,
                email,
                password: hashedpassword
            })
    
            user.save()
            .then((user)=>{
                res.json({message: "User saved successfully!"})
            })
            .catch((err)=>{
                console.log(err)
            })
        })
        
    })
    .catch((err)=>{
        console.log(err)
    })
})

router.post("/signin",(req,res)=>{
    //handing the incoming req from frontend
    const {email, password} = req.body
    //if anything email or password empty then show error
    if(!email || !password){
        res.status(422).json({error: "Enter email or password to sign in!"})
    }
    //finding user in db by email
    User.findOne({email:email})
    .then((savedUser)=>{
        if(!savedUser){
            return res.status(422).json({error: "Invalid email or password!"})
        }
        bcrypt.compare(password,savedUser.password)
        .then((doMatch)=>{
            if(doMatch){
                // res.json({message: "Signed in Successfully!"})
                // making tokens by _id after installing jsonwebtoken
                const token = jwt.sign({_id: savedUser._id},JWT_SECRET)
                res.json({token})
            }
            else res.status(422).json({error: "Invalid email or password!"})
        })
        .catch((err)=>{
            console.log(err)
        })
    })

})

module.exports = router