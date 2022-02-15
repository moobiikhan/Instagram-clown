const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type: String,
        required: true
    }
})

// didn't use module.exports bcs it shows error while using 
// twice or thrice anywhere in program
mongoose.model("User", userSchema)