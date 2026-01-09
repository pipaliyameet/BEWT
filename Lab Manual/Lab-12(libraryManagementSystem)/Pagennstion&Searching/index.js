const express = require('express');
const mongoose = require('mongoose');
const Bank = require('./bank');

const app = express();


const mongoURL = "mongodb://localhost:27017/BANK_INFO";

mongoose.connect(mongoURL)
.then(()=>{
    app.use(express.json());

    app.use('/bank',Bank);

    app.listen((3000),()=>{
        console.log("Server started at @3000");
    });
})
