const express = require('express'); 
const mongoose = require('mongoose');

const facultyRoutes = require('./facultyRoutes');

const mongoURL = "mongodb://localhost:27017/facultybackend";

const app = express();

app.use('/faculty',facultyRoutes);

app.use(express.json());//convert dta into json

mongoose.connect(mongoURL)
.then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
} )  

app.listen(3000,()=>{
    console.log("Server started at @3000");
});