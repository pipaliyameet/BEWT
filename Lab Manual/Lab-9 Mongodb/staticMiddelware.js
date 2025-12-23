const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("Check request");
    console.log("request : ",req.url);
    next();
});

app.get('/:home',(req,res)=>{
    res.send('this is your page')
})

app.listen(3000,()=>{
    console.log("server started at @3000");
});