const express = require('express');
const bank = require('./bankSchema');
const app = express();

app.get('/', async (req, res) => {
    const data = await bank.find();
    res.json(data);
});

app.get('/:id', async (req, res) => {
    const data = await bank.findById(req.params.id);
    res.json(data);
});
app.post('/add', async (req, res) => {
    const data = new bank({
        ACTNO: req.body.ACTNO,
        CNAME: req.body.CNAME,
        BNAME: req.body.BNAME,
        AMOUNT: req.body.AMOUNT,
        ADATE: req.body.ADATE
    });
    await data.save();
    res.json(data);
});

app.put('/edit/:id',async(req,res)=>{
    const updateBank = await bank.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.send(updateBank+"This bank updated successfully");
});

app.delete('/delete/:id',async(req,res)=>{
    const deleteBank = await bank.findByIdAndDelete(req.params.id);
    res.send(deleteBank+"This bank deleted successfully");
});

module.exports = app;