//npm i express (install express)

// http://http://localhost:3000/students
//PROTOCALL://HOST:PORT/PATH

const express = require('express');
require('dotenv').config();

const app = express();

// app.get(/a/,(req,res)=>{//one time a
//     res.send('WELCOME about');
// });

// app.get("/book/:source-:destination",(req,res)=>{
//     res.send(`${req.params.destination} to ${req.params.source}`)
// })

// app.get("/home/:meet/news",(req,res)=>{//one time a
//     res.send('WELCOME about : '+req.params.meet);
// });

// app.get(/fly$/,(req,res)=>{//last fly
//     res.send('WELCOME about');
// });

app.all(/.*/,(req,res)=>{//any thing if any one not setisfy & write all for all case
    const data = {error:'page not found'}
    res.status(404).json(data);//jsonp check in home
});

app.listen(3000,()=>{
    console.log('server started port : ',);
});