// var http = require ('http');
// var url = require ('url');
// var fs = require ('fs');
  
// http.createServer(function(req,res){
// 	var q = url.parse(req.url,true);
// 	var filename = "."+q.pathname;
// 	fs.readFile(filename,function(err,data){
// 		if(err){
// 			res.writeHead(404,{'Content-Type':'text/html'});
// 			return res.end('404 Not Found !!!');
// 		}
// 		res.writeHead(200,{'Content-Type':'text/html'});
// 		res.writeHead(data);
// 		return res.end();
// 	});
// }).listen(8080);

// console.log("server Listening on port 8080...")

var http = require('http'); //to tranfer data over internet
var fs = require('fs');
var url = require('url');

http.createServer(function (req,res) {
	var q = url.parse(req.url,true);
	var filename = "."+ q.pathname;

	if(filename == './'){filename = './index1'}
	filename = filename + ".html";
	console.log(filename);

	fs.readFile(filename,function (err,data) {
		if (err){
			res.writeHead(404,{'content-Type':'text/html'});
			return res.end('404 not found')
		}
		res.writeHead(200,{'content-Type' : 'text/html'});
		res.write(data);
		return res.end();
	}); 
}).listen(8080);


console.log('sever Listening on port 8080.....');