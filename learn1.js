var http = require("http");
http.createServer(function(request, response){
	/*
		HTTP 헤더 전송
		HTTP Status: 200 : OK
		Content Type: 
	*/
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end("Hello World!");
}).listen(8081);

console.log("Server running!!");