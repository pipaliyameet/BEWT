const http = require('http');
const url = require('url')
const server = http.createServer((req,res)=>{
    res.write("hii ")
    // console.log('URL = ',req.url)
    if(req.url=='/students'){
        res.end('from students')
    }
    else if(req.url=='/facultys'){
        res.end('from facultys')
    }
    else if(req.url=='/duStaff'){
        res.end('from duStaff')
    }
    else if(req.url=='/meet'){
        res.end('from meet')
    }
    else if(req.url=='/anyone'){
        res.end('from anyone')
    }
    else{
        res.end('frome nodemon')
    }
})

server.listen(3000,()=>{
    console.log('server is started at @3000')
})