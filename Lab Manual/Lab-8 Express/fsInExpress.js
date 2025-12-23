// Create a webapp in NodeJS which reads ƒles like about.txt, contact.txt and display it using http core module

const express = require('express');

const fs = require('fs');

const app = express();

app.get('/about',(req,res)=>{
    fs.writeFile('about.txt','This is about page!',(err)=>{});
    fs.readFile('about.txt','utf-8',(err,data)=>{
        if(err) {console.log('Error of about : ',err)}
        else {res.send(data);}
    });
});

app.get('/context',(req,res)=>{
    fs.writeFile('context.txt','This is context page!',(err)=>{});
    fs.readFile('context.txt','utf-8',(err,data)=>{
        if(err) {console.log('Error of context : ',err)}
        else {res.send(data);}
    });
})

app.listen(3000,()=>{
    console.log('Server started at @3000');
});