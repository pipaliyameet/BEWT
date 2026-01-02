const express = require('express');
const bodyParser = require('body-parser');

const routerStudent = express.Router();

const data = ["meet" ,"pipaliya" ,"jetpur"];
//memory address not change array element we can change or edit but not the array itself

routerStudent.use(bodyParser.json());
routerStudent.get('/',(req,res)=>{
    res.send(data);
})

routerStudent.get('/:id',(req,res)=>{
    res.send(data[req.params.id]);
})

routerStudent.post('/add',(req,res)=>{
    const studentName = req.body.name;
    data.push(studentName);
    res.send("add student");
})

routerStudent.put('/add',(req,res)=>{
    const studentName = req.body.name;
    data.push(studentName);
    res.send("edit student");
})

routerStudent.delete('/add',(req,res)=>{
    data.splice(req.params.id,1);
    res.send("delete student");
})
module.exports = routerStudent;   