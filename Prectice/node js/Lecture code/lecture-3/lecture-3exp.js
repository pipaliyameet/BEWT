const express = require('express');
require('dotenv').config();

const {checkLogin} = require('./middleware')

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());
//add after function 
app.use(checkLogin);

app.post(
    
    //never write res.send in middleware because this end response
    //two midal wey in below line first checkbody after function
    
    '/home', bodyParser.json(), checkLogin,//checkLogin is midalware beacuse this midal of path and response
    (req,res,next)=>{
    console.log("welcome to server");
    next();
    },
    (req,res)=>{
        res.send("welcome to home   ");
    }
);
app.listen(3000,()=>{
    console.log('server started port : ',);
});