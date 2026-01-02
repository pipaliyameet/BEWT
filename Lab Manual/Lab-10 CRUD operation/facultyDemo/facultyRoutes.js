const express = require('express'); 
const Faculty = require('./facultySchema');

const app = express();

app.get('/',async(req,res)=>{
    try{
        const faculties =await Faculty.find();   
        res.send(faculties);
    }catch(err){
        res.status(500).json(err);
    }
});

app.get('/:id',async(req,res)=>{
    try{
        const faculty = await Faculty.findById(req.params.id);
        res.send(faculty);
    }catch(err){
        res.status(500).json(err);
    }
});
app.post('/add',async(req,res)=>{
    try{
        const faculty = new Faculty(req.body);
        const saveFaculty = await faculty.save();
        res.status(201).json(saveFaculty);
    }catch(err){
        res.status(500).json(err);
    }
})

app.put('/edit/:id',async(req,res)=>{
    try{
        const updateFaculty = await Faculty.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true}
        );
        res.send(updateFaculty+"This faculty updated successfully");
    }catch(err){
        res.status(500).json(err);
    }
})

app.delete('/delete/:id',async(req,res)=>{
    try{
        const deleteFaculty = await Faculty.findByIdAndDelete(req.params.id);
        res.send(deleteFaculty+"This faculty deleted successfully");
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports = app;