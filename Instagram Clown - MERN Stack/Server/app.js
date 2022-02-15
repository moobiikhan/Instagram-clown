const express = require("express");
var app = express();
const mongoose = require("mongoose");
const { MONGOURI } = require("./keys");

//-------------------------------------
// MongoDB connection
mongoose.connect(MONGOURI)

.then(()=>{
    console.log("Conected to MongoDB Successfully!")
})

.catch((err)=>{
    console.log("Error Connecting to Database!")
    process.exit();
})

//--------------------------------------------


// connection to User Schema in DB
require("./models/users")
require("./models/posts")


// it handles the json requests from frontend
app.use(express.json());

// connection to the routes
app.use(require("./routes/posts"))
app.use(require("./routes/auth"))


app.get("/",(req,res)=>{
    res.send("Hello world")

})


// Server Detials
app.listen(3000,()=>{
    console.log("Server is running at Port 3000")
})