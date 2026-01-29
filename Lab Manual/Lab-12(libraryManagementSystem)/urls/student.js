const express = require('express');
const router = express.Router();
const students = require('../models/studentSchema');

//get all
router.get('/',async (req,res)=>{
    const data = await students.find();
    res.json(data);
})

//get by id
router.get('/:id',async (req,res)=>{
    const data = await students.findById(req.params.id);
    res.json(data);
})

//insert
router.post('/add',async (req,res)=>{
    const data = new students(req.body);
    await data.save();
    res.json(data);
})

//edit
router.put('/edit/:id',async (req,res)=>{
    const data = findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    await data.save();
    res.json(data);
})

router.delete('delete/:id',async(rea,res)=>{
    const data = findByIdAndDelete(req.params.id);
    res.json(data);
})

module.exports = router;