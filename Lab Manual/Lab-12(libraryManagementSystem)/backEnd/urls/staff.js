const express = require('express');
const staff = require('../models/staffSchema');
const router = express.Router();

const Books = require('./book.js');
const Students = require('./student.js');

router.use('/books',Books);
router.use('/students',Students);
//get all
router.get('/', async(req,res)=>{
    const data = await staff.find();
    res.json(data);
});

//get By Id
router.get('/:id', async(req,res)=>{
    const data = await staff.findById(req.params.id);
    res.json(data);
});

//insert
router.post('/add', async(req,res)=>{
    const data = new staff(req.body);
    await data.save();
    res.json(data);
})

//edit
router.put('/edit/:id', async(req,res)=>{
    const updateStaff = await staff.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.send("update Successfully : ",updateStaff);
});

router.delete('/delete/:id', async(req,res)=>{
    const deleteStaff = await staff.findByIdAndDelete(res.params.id);
    res.send(deleteStaff+" This person successfukky deleted");
});

module.exports = router;