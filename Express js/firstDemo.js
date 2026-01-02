const express = require("express");
require("dotenv").config();

const app = express();

app.all("/home",(req,res,next)=>{
    console.log("Home page requested");
    res.send("This is home page");
    next();
})

app.get('/',(req,res)=>{
    res.send("Hello everyone!");
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server started at @ ${process.env.PORT}`);
})