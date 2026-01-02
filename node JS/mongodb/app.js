const express = require('express');
const app = express();
require('./conection/connection')();
app.use('/',(req,res,next)=>{
    res.send("Hello ");
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});