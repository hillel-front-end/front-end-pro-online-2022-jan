var http = require('http');
var static = require('node-static');
var file = new static.Server('.'); // TODO
let port = 9900;

console.log('Before server started.');
http.createServer(function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url === '/info') {
        return onInfoCallback(req, res);
    }

    file.serve(req, res);
}).listen(port);
console.log('After server started.');

console.log(`Server running on port ${port}`);


function onInfoCallback(req, res) {
    console.log('Inside server - info.');

    const data = JSON.stringify({x: 10, y: 20, time: Date.now()});
    // const data = JSON.stringify({x: 10, y: 20, time: Date.now()});


    res.write(data);
    res.end();

    return;
}