const express = require('express');

const mongoose = require('mongoose');

const app = express();

const mongoURL = "mongodb://localhost:27017/FacultyDB";

app.use(express.json());

mongoose.connect(mongoURL)