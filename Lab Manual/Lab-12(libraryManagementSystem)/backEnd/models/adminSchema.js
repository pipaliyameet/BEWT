const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    adminName:String,
})

module.exports = mongoose.model('admin',adminSchema);