//Step 1 Importing Required Module
//require directive to load the http module and store the returned HTTP instance into an http variable
var http = require("http");

//Step 2 Create Server
http
  .createServer(function(request, response) {
    // Send the HTTP header
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { "content-type": "text/plain" });
    // Send the response body as "Hello World"
    response.end("Welcome!!!");
  })
  .listen(8081);

// Console will print the message
console.log("Server started successfully");

//http://127.0.0.1:8081/ -To test and execute the code above
