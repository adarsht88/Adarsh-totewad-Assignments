var http=require('http');
var moment=require('moment');
var strftime = require('strftime')
var fs = require('fs');
var server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    var name = process.argv[2];
    console.log("hello : " + name);
    res.end("sucess");
});
server.listen(3000,'127.0.0.1');
console.log("server is listening on port 3000");