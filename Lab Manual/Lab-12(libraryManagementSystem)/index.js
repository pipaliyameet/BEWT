const express = require('express');
const mongoose = require('mongoose');
const Books = require('./urls/book');

const app = express();


const mongoURL = "mongodb://localhost:27017/Library";

mongoose.connect(mongoURL)
.then(()=>{
    app.use(express.json());

    app.use('/books',Books);

    app.listen((3000),()=>{
        console.log("Server started at @3000");
    });
})
