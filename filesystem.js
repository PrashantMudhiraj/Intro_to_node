var http = require('http'); //to tranfer data over internet
var fs = require('fs');
var url = require('url');

http.createServer(function (req,res) {
	var q = url.parse(req.url,true);
	console.log(q.pathname);

	fs.readFile('boot.html',function (err,data) {
		res.writeHead(200,{'content-Type' : 'text/html'});
		res.write(data);
		console.log("....Incoming request : " + req.url)
		res.end();
	}); 
}).listen(8080);


console.log('sever Listening on port 8080.....');