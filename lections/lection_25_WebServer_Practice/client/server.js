var http = require('http');
var static = require('node-static');
var file = new static.Server('.'); 
let port = 2000;

http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(port);

console.log(`Server running on port ${port}`);