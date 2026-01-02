const express = require('express');
const mongoose = require('mongoose');
const facultyRoutes = require('./facultyRouting');

//convert data in json
const app = express();

app.use(express.json());//builtting middelware 

mongoose.connect('mongodb://localhost:27017/FacultyDB')

.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
});

app.use('/api/faculty',facultyRoutes);

app.listen(3000,()=>{
    console.log("server started at @3000");
});