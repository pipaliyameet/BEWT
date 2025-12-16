//npm i express (install express)

// http://http://localhost:3000/students
//PROTOCALL://HOST:PORT/PATH

const express = require('express');

const app = express();

app.get('/',(req,res)=>{//at a time firat app call
    res.send('WELCOME get');
});

app.post('/',(req,res)=>{
    res.send('WELCOME post');
});

app.patch('/',(req,res)=>{
    res.send('WELCOME patch');
});

app.all('/',(req,res)=> {
    res.send('WELCOME from any one');
});

app.delete('/',(req,res)=>{
    res.send('WELCOME delete');
});

app.get('/students',(req,res)=>{
    res.send('WELCOME student');
});

app.listen(3000,()=>{
    console.log('server started');
});