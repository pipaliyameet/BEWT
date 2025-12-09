const url = require('node:url');
const myurl =
  new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');

console.log("ParseURL : ",myurl) 
console.log("Pathname : ",myurl.pathname)
console.log("Hostname : ",myurl.hostname)
console.log("Protocall : ",myurl.protocol)
console.log("Query : ",myurl.query)
