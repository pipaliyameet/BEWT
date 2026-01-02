const express = require('express');
const app = express();

function greet(req,res,next){
    console.log('Good Morning');
    next();
}

function welcome(req,res,next){
    console.log('Welcome to Express.js');
    next();
}


app.use(greet);
app.use("/du",welcome);

app.get('/', (req, res) => {
    console.log("Somethng blank");
    res.send('Hello blank!');
});

app.get('/home', (req, res) => {
    console.log("Somethng home");
    res.send('Hello home!');
});

app.get('/du/home', (req, res) => {
    console.log("Something happened in /du/home");  
    res.send('Hello du home!');
});

app.get('/home/du', (req, res) => {
    console.log("Something happened in /home/du");  
    res.send('Hello home du!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});