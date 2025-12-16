const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    
    if(req.url=='/about'){
        fs.writeFile("about.txt",'WELCOME to my aboutFile!',(err)=>{});
        fs.readFile('about.txt','utf-8',(err,data)=>{
            if(err) {console.log('Error : ',err)}
            else {res.end(data);}
        });
    }

    else if(req.url=='/contect'){
        fs.writeFile("contect.txt",'WELCOME to my contectFile!',(err)=>{});
        fs.readFile('contect.txt','utf-8',(err,data)=>{
            if(err) {console.log('Error : ',err)}
            else {res.end(data);}
        });
    }

    else {res.end("byy");}
});

server.listen(3000,()=>{
    console.log('server is started at @3000')
})