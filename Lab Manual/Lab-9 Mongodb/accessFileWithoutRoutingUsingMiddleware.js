const express = require('express');

const app = express();

app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.send('this is your page and file : ')
})

app.listen(3000,()=>{
    console.log("server started at @3000");
});