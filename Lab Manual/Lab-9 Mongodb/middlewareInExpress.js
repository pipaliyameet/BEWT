const express = require('express');

const app = express();

const checkDetail = (req,res,next)=>{
    console.log("Check request");
    next();
}

app.get('/',checkDetail,(req,res)=>{
    res.send('this is default page')
})

app.listen(3000,()=>{
    console.log("server started at @3000");
});