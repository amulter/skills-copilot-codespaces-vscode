// create web server
// run node comment.js
// open browser and type http://localhost:3000/?q=123
// you will see 123
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.q;
  res.end(txt);
}).listen(3000);