const express = require('express');
const Faculty = require('./faculty');

const app = express();

app.post('/', async (req, res) => {
    try {
        const faculty = new Faculty(req.body);   
        const saveFaculty = await faculty.save();//await use with async function    
        res.status(201).json(saveFaculty);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get('/', async (req, res) => {
    try {
        const faculties = await Faculty.find();
        res.json(faculties);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = app;