const mongoose = require('mongoose');

const conn =async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/mydatabase'); 
        console.log("MongoDB connected successfully");
    }       
    catch(err){
        res.status(400).json("Error connecting to MongoDB: " + err);
    }
}

module.exports=conn;