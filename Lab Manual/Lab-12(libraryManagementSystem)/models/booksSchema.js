const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookesTital:String,
    authorName:String,
    availableQty:Number,
    price:Number
});

module.exports = mongoose.model('books', bookSchema);