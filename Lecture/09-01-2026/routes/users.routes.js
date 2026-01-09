//routes

const express = require('express');

const routeUser = express.Router();

routeUser.get('/', (req, res) => {
    res.send('Welcome to the Restaurant home page of users');
});

routeUser.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Details of restaurant with ID of users`);
});


module.exports.routeUser = routeUser;