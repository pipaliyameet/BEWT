// Create a hello world webapp using “http”core module in NodeJS.
const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('hello from meet')
})
app.listen(3000,()=>{
    console.log("server started @3000")
})