var http = require("http");
var fs = require("fs");
var mime = require("mime");
var path = require("path");
var router = require("./router")
var chat_server = require('./lib/chat_server')

var server = http.createServer(function(req, res){
	console.log(router);
	router.router(req, res);
  // res.writeHead(200, {'Content-Type' : 'text/plain'});
 // 	res.write("Hello World\n");
 // 	res.end();
}).listen(3000);

chat_server.createChat(server);

console.log("server started.")
