const mongoose = require('mongoose');

const stuSchema = new mongoose.Schema({
    studentName:String,
    studentEmail:String,
    studentRollNumber:String,
    studentCourse:String,
    studentJoiningDate:Date,
    bookIssueDate:{
        type:Date,
        default:Date.now
    }
})

module.exports  = mongoose.model('students',stuSchema);