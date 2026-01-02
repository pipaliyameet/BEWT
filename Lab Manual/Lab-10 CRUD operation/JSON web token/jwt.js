const express = require('express')

const jsonwebtoken = require('jsonwebtoken');

const app = express();

app.use(express.json());

const SECRET_KEY = "mysecretkey";

app.post('/login', (req, res) => {
    const {username ,password}=req.body;
    if(username === 'meet' && password === '1234'){
        const token = jsonwebtoken.sign(
            {username: username},
            SECRET_KEY,
            {expiresIn: '1h'}
        );
        res.json({token: token});
    } else {
        res.status(401).json({message: 'Invalid credentials'});
    }
});

function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({message: 'No token provided'});
    }
    const token = authHeader.split(' ')[1];
    jsonwebtoken.verify(token,SECRET_KEY,(err,decoded)=>{
        if(err){
            return res.status(401).json({message:'Invalid token'});
        }
        req.user = decoded;
        next();
    });
}

app.get('/dashbord',verifyToken,(req,res)=>{
    res.json({message:`welcome to the dashbord, ${req.user.username}`});
    user: req.user;
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
