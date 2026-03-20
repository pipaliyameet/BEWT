const express = require('express');
const admin = require('../models/adminSchema');
const router = express.Router();

const Books = require('./book.js');
const Staffs = require('./staff.js');
const Students = require('./student.js');

router.use('/books',Books);
router.use('/staffs',Staffs);
router.use('/students',Students);

//get all admin
router.get('/', async(req,res)=>{
    const data = await admin.find();
    res.json(data);
});

//get by id admin
router.get('/:id', async(req,res)=>{
    const data = await admin.findById(req.params.id);
    res.json(data);
})

//insert admin
router.post('/add', async(req,res)=>{
    const data = new admin({
        adminName:req.body.adminName
    })
    await data.save();
    res.json(data);
})

//edit admin
router.put('/edit', async(req,res)=>{
    const updateAdmin = await admin.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    ) ;
    res.json("This admin successfully edited "+updateAdmin);
})

//delete admin
router.delete('/delete/:id', async(req,res)=>{
    const deletedAdmin = await admin.findByIdAndDelete(req.params.id);
    res.json("This admin successfully deleted "+deletedAdmin);
});

module.exports = router;