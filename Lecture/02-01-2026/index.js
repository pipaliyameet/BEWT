const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const app = express();
const jwt = require('jsonwebtoken');
//install jwt (npm install jsonwebtoken) for token based authentication

app.use(express.json());
mongoose.connect('mongodb://localhost:27017/expensemanager')
.then(() => {
    app.get('/home', (req, res) => {
        res.send('welcome home!');
    });

    app.get('/users', async (req, res) => {
        const data = await User.find()//first write async function then await
        res.json(data);
    });

    app.post('/users', async (req, res) => {
        const data = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password,
            appe: req   .body.age
        });
        await data.save();
        if(data){
            const token = await jwt.sign(data,"mysecretkey");
            console.log(token);
            res.send('user added');
        }
        else{
            res.send('error');
        }
    });

    app.put('/users/:id', async (req, res) => {
        const ans = await User.findByIdAndUpdate(req.params.id, req.body);
        res.send(ans);
    });

    app.delete('/users/:id', async (req, res) => {
        const ans = await User.findByIdAndDelete(req.params.id);
        res.send(ans);
    });
    +
    app.get('users/:id', async (req, res) => {
        
        const data = await User.findById(req.params.id);//this give array if we want object form then write 'findOne' mathod
        res.json(data);
    });
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    }); 
});