const http = require('http')
const path = require('path')
const url = require('url')
const open = require('open')
const fs = require("fs")

const server = http.createServer((req, res) => {
  var pathname= url.parse(req.url).pathname

  res.setHeader('Access-Control-Allow-Origin','*');
  res.writeHead(200, {"Access-Control-Allow-Origin": "*"});

  // res.write("<br>");
  // res.write(req.url);
  // res.write("<br>");

  // fs.readFile('./static/data.json',function (err,data){
  //   // res.write(data);
  //   res.end("hello");
  //   });
  // res.end('hello world');

  // var status = req.url.substr(1);
  // if( ! http.STATUS_CODES[status])
  // {
  //     status = '404';
  // }
  // res.writeHeader(status,{'Content-Type':'text/plain'});
  // res.end(http.STATUS_CODES[status]);

  var params = url.parse(req.url, true);
  // console.log(params);
  var data={"name":"ming"}
  // res.writeHead(200, {"Content-Type": "text/plain"});
  res.end(JSON.stringify(data));
  // var str =  "ming" + '(' + JSON.stringify(data) + ')';//jsonp
  //   res.end(str);
  // if (params.query && params.query.callback) {
  //   //console.log(params.query.callback);
  //   var str =  params.query.callback + '(' + JSON.stringify(data) + ')';//jsonp
  //   res.end(str);
  // } else {
  //   res.end(JSON.stringify(data));//普通的json
  // }   
});
server.listen(8000);

console.log('Server running at http://127.0.0.1:8000/');