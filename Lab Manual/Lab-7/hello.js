const http = require('http');

const server = http.createServer((req,res)=>{
    res.write("hii ")
    res.end('frome meet')
})

server.listen(3000,()=>{
    console.log('server is started at @3000')
})