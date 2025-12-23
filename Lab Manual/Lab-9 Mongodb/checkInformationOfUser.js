const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("Check request");
    if(req.query.admin==='true'){
        console.log('user is valid person');
        next();
    }
    else{
        res.send("Your invalid person");
    }
});

app.get('/admin',(req,res)=>{
    res.send('this is your page')
})

app.listen(3000,()=>{
    console.log("server started at @3000");
});