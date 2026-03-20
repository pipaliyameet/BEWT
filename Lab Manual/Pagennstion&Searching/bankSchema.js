const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    ACTNO:Number,
    CNAME:String,
    BNAME:String,
    AMOUNT:Number,
    ADATE:String
});

module.exports = mongoose.model('Deposit', bankSchema);