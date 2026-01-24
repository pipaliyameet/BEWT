const express = require('express');
const routeUser = require('./routes/user.route');

const app = express();

app.use('/users',routeUser);

app.listen(3001,()=>{
    console.log("Server started at @3000");
})