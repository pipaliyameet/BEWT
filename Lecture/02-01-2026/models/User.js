const mongoose = require('mongoose');

const schema = mongoose.Schema({
    fullname : String,
    username:String,
    password:String,
    age:Number
});

module.exports = mongoose.model('User', schema);