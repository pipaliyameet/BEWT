const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/BANK_INFO')
.then(()=>{
    console.log('mongodb connected');

    const sch = new mongoose.Schema({
        ACTNO:Number,
        CNAME:String,
        BNAME:String,
        AMOUNT:Number,
        ADATE:String
    })
    
    const deposit = mongoose.model('Deposits',sch,'Deposits')

    app.get('/',async(req,res)=>{
        console.log('fachhing')
        const data = await deposit.find();
        res.json(data);
    })

    app.listen(3001,()=>{
        console.log("Server started at @3001");
    })
})