// Common JS
// import -> require
// export -> module.exports
var http = require('http');
var static = require('node-static');

console.log(Object.keys(static));
var file = new static.Server('.');
let port = 7274;


const outcome = require('./RandomService.js')
console.log('Index started.', outcome);



http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(port);

console.log(`Server running on port ${port}`);