const http = require('http');
const url = require('url');
const server = http.createServer((req,res)=>{
    console.log(url)
    res.write("Hello World!!")
    res.end("Hii")
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});