var http=require('http');
var moment=require('moment');
var strftime = require('strftime')

var server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    var strftime = require('strftime');
    console.log(strftime('%B %d, %Y %H:%M:%S')) 
    console.log(strftime('%F %T', new Date(1307472705067)))
});

server.listen(3000,'127.0.0.1');
console.log("server is listening on port 3000");