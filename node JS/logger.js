// (function(exports,require,module,__filenamee,__dirname){
var url = 'http://mylogger.io./log';

console.log("Filename : "+__filename+"\n");
console.log("Dirname : "+__dirname);


function log(massage){
    //send an http request
    console.log(massage);
}
module.exports.log = log;
// module.export.log=log;
// exports.log=log; // module.export
// });