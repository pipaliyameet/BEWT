const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookesTital:String,
    authorName:String,
    availableQty:Number,
    price:Number,
    Category:String,
    ISBN:Number
});

module.exports = mongoose.model('books', bookSchema);