var http = require("http");
var fs=require("fs");
http.createServer(function (request, response) {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body as "Hello World"
    response.end("<h1>Hello Node!!!!</h1>\n");
 }).listen(3000);

 


