const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,   
    },
    department: {
        type: String,
    },
    currentDate : {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Faculty', facultySchema);
