const checkLogin = (req,res,next)=>{
    //we never write bodyParse.json() in this because this need request,response and next if rigth then this default call next and not check below data in this function 

    //evu hendler jema next name no perameter hoi ene midal wer kevay
    //never write res.send in middleware because this end response 
    //else ma lakhi skay karan ke tena pachhi koi prossess nai karvi

    if(req.body.username=='meet' && req.body.password=='pipaliya'){
        next();
    }
    //first install body-parse
    //open bpdy->
    // json->{
    //   "username":"meet",
    //   "passeord":"pipaliya"
    // }
    else{
        res.status(401).send("Unothorised!");
    }
}

module.exports.checkLogin= checkLogin;