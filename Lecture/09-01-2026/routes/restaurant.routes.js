//routes

const express = require('express');
const { getAllRestaurants, getRestaurantById } = require('../services/resturent.services');

const routeRestaurant = express.Router();

routeRestaurant.get('/', (req, res) => {
    const data = getAllRestaurants();
    res.send('Welcome to the Restaurant home page of restaurants');
});

routeRestaurant.get('/:id', (req, res) => {
    const data = getRestaurantById();
    res.send(`Details of restaurant with ID of restaurants`);
});


module.exports.routeRestaurant = routeRestaurant;