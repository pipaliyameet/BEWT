const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    staffName : String,
    staffEmail:String,
    staffPosition:String,
    staffJoiningDate:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('staffs',staffSchema); 