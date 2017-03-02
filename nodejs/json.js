var http = require('http');
//b2

var data = {key: 'value', hello: 'world'};

var srv = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify(data));
});

var server = srv.listen(8000, function() {
  console.log('listening on localhost:%s', server.address().port);
});
