const express = require('express');
const books = require('../models/booksSchema');
const app = express();

app.get('/', async (req, res) => {
    const data = await books.find();
    res.json(data);
});

app.get('/:id', async (req, res) => {
    const data = await books.findById(req.params.id);
    res.json(data);
});
app.post('/add', async (req, res) => {
    const data = new books({
        bookesTital: req.body.bookesTital,
        authorName: req.body.authorName,
        availableQty: req.body.availableQty,
        price: req.body.price
    });
    await data.save();
    res.json(data);
});

app.put('/edit/:id',async(req,res)=>{
    const updateBook = await books.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.send(updateBook+"This book updated successfully");
});

app.delete('/delete/:id',async(req,res)=>{
    const deleteBook = await books.findByIdAndDelete(req.params.id);
    res.send(deleteBook+"This book deleted successfully");
});

module.exports = app;