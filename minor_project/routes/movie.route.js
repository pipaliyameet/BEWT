const express = require('express');
const { getAllMovie, getByIdMovie, insertMovie, updateMovie, deleteMovie } = require('../services/movie.service');

const routeMovie = express.Router();

//get all
routeMovie.get('/',async(req,res)=>{
    const data = await getAllMovie();
    res.send(data)
});

//getById
routeMovie.get('/:id',async(req,res)=>{
    const data = await getByIdMovie(req.params.id);
    res.send(data);
});

//insert
routeMovie.post('/',async(req,res)=>{
    const data = await insertMovie(req.body);
    res.send(data);
});

//edit
routeMovie.patch('/:id',async(req,res)=>{
    const data = await updateMovie(req.params.id, req.body);
    res.send(data);
});

//delete
routeMovie.delete('/:id',async(req,res)=>{
    const data = await deleteMovie(req.params.id);
    res.send(data);
});

module.exports = routeMovie;