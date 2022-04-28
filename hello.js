var http = require('http'); //to tranfer data over internet
var url = require ('url');

http.createServer(function (req,res) {
	res.writeHead(200,{'content-Type' : 'text/html'});
	var q = url.parse(req.url,true).query;
	var dates = q.year + " " +q.month;
	res.write(dates);
	res.end(); 
}).listen(8080);

//create server --> object  