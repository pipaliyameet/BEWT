const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.send('WELCOME TO MY WORLD!')
})
app.get('/student',(req,res)=>{
    res.send('This is student page')
})
app.get('/faculty',(req,res)=>{
    res.send('This page for faculty')
})
app.get('/staf',(req,res)=>{
    res.send('This is staf page')
})
app.get('/forme',(req,res)=>{
    res.send('This is your page')
})

app.listen(3000,()=>{
    console.log("Server started at @3000");
});