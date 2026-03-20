const express = require('express');
const { getAllMR, getByIDMr, addMr, updateMr, deleteMoviRating } = require('../services/movieRating.service');

const movieRatingRoutes = express.Router();

//get all
movieRatingRoutes.get('/', async(req, res)=>{
    const data = await getAllMR();
    res.send(data);
});

//getById
movieRatingRoutes.get('/:id', async(req,res)=>{
    const data = await getByIDMr(req.params.id);
    res.send(data);
});

//add
movieRatingRoutes.post("/", async(req, res)=>{
    const data = await addMr(req.body);
    res.send(data);
});

//edit
movieRatingRoutes.patch('/:id', async(req, res)=>{
    const data = await updateMr(req.params.id, req.body);
    res.send(data);
});

//delete
movieRatingRoutes.delete('/:id', async(req, res)=>{
    const data = await deleteMoviRating(req.params.id);
    res.send(data);
});

module.exports = movieRatingRoutes;