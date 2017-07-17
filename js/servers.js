
var http = require("http");
var fs = require("fs");
http.createServer(function(req,res){
    //跨域
    res.setHeader("Access-Control-Allow-Origin","*");
    //设置响应头
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    fs.readFile("first.json","utf-8",function(err,data){
        if(!err){
            res.end(data);
        }
    })
}).listen(1997);
console.log("连接成功")