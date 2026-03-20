var jwt = require('jsonwebtoken')

function authMiddelware(req,res,next){
    try{
        console.log(req.url.toString())
        if(req.url.toString().indexOf('login')>-1){
            return next();
        }
        // console.log(req.headers.authorization.split(" ")[1])
        var decoded = jwt.verify(req.headers.authorization.split(" ")[1], 'shhhhh');
        next();
    }catch(err){
        res.status(401).send({error:true, message:"Unauthorized"});
    }
}

module.exports = {authMiddelware}