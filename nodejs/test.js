var http = require("http"); 
var URL = require('url');
http.createServer( function (req, res) { 
	//http://localhost:8000/select?aa=001&bb=002
   var p = URL.parse(req.url);
   //console.log(req);
   console.log(JSON.stringify(p));
   console.log(p.href);
   console.log(p.protocol); //取到的值是：http: x
   console.log(p.hostname);//取到的值是：locahost x

   //var arg = URL.parse(req.url).query;  //方法一arg => aa=001&bb=002
   var arg = URL.parse(req.url, true).query;  //方法二arg => { aa: '001', bb: '002' }
   console.log(arg);
   console.log(arg.aa);//返回001
   console.log(arg.bb);//返回002

	// demo-json.js
	var obj = { 
		"name": {"FirstName":"LiLi","LastName":"Chan"},
		"age": 22, 
		"sex": "F" 
	};

	var str = JSON.stringify(obj);
	console.log(str);

	var obj2 = JSON.parse(str);
	console.log(obj2);
	/*{ name: { FirstName: 'LiLi', LastName: 'Chan' },
  age: 22,
  sex: 'F' }*/
	res.writeHead(200, {'Content-Type': 'application/json'});
	res.end(JSON.stringify(obj));

 /* 
  res.writeHead( 200 , {"Content-Type": "text/html"}); 
  res.write("<h1>Node.js</h1>"); 
  res.write("<p>Hello World</p>");
  res.end("<p>beyondweb.cn</p>");
  */
  //读文件 阻塞代码实例
 /* var fs = require("fs");
  var data = fs.readFileSync('readme.txt');
  console.log(data.toString());
  console.log("程序执行结束!");
*/

//非阻塞代码实例 
var fs = require("fs");
//Node.js 回调函数
fs.readFile('G:\\opensource\\nodejs\\src\\readme.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束!");

}).listen(8000); 
console.log("HTTP server is listening at port 8000.");

