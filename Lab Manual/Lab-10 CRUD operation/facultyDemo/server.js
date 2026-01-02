const express = require('express'); 
const mongoose = require('mongoose');

const facultyRoutes = require('./facultyRoutes');

const mongoURL = "mongodb://localhost:27017/FacultyDB";

const app = express();

app.use(express.json());
app.use('/faculty', facultyRoutes);

mongoose.connect(mongoURL)
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Error connecting to MongoDB:", err));

app.listen(3000, () => {
    console.log("Server started at @3000");
});
