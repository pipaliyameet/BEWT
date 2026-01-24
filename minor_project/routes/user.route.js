const express = require('express');

const routeUser = express.Router();

//get all
routeUser.get('/',(req,res)=>{
    res.send('get all User');
})

// get by id
routeUser.get('/:id',(req,res)=>{
    res.send(`'${req.params.id}' user found`);
})

//Insert
routeUser.post('/',(req,res)=>{
    res.send('Inserted User');
})

//edit
routeUser.patch('/:id',(req,res)=>{
    res.send(`'${req.params.id}' user edited`);
})

//delete
routeUser.delete('/:id',(req,res)=>{
    res.send(`"${req.params.id}" user deleted`);
})

module.exports = routeUser;