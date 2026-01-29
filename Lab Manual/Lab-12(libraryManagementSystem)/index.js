const express = require('express');
const mongoose = require('mongoose');

const Students = require('./urls/student');
const Books = require('./urls/book');

console.log('TYPE Students:', typeof Students);
console.log('TYPE Books:', typeof Books);

const app = express();

const mongoURL = "mongodb://localhost:27017/Library";

mongoose.connect(mongoURL)
.then(() => {
    console.log("MongoDB connected");

    app.use(express.json());

    // TEMP: comment one by one to find the crash
    app.use('/students', Students);
    app.use('/books', Books);

    app.listen(3000, () => {
        console.log("Server started at http://localhost:3000");
    });
})
.catch(err => console.error(err));