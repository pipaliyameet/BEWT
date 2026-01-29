const mongoose = require('mongoose');

const stuSchema = new mongoose.Schema({
    studentName:String,
    studentDept:String,
    currentYear:Number,
    bookIssueDate:{
        type:Date,
        default:Date.now
    }
})

module.exports  = mongoose.model('students',stuSchema);