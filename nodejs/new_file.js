/**
 * New node file
 */
//获取http模块对象（需提前安装好）
var http = require('http');
//创建服务器
http.createServer(function (req, res) {
  //编写HTTP响应头信息
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  //listen方法主要是启动服务器监听的端口和IP
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');