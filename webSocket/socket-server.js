const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port:8081})
let fs = require('fs')
let _num=0
wss.on('connection',function(ws){
  let reqUrl=ws.upgradeReq.url
  console.log(reqUrl)


  console.log('client connect')
  console.log(_num)
  _num++
  var msg=""
  ws.on('message',function(message){
    console.log(message)
    msg=message;
  })



  var i=0;
  var t=setInterval(function(){
    ws.send(i+"----"+msg);
    i++
  }, 2000)
  ws.on('close', function () {
        // closeSocket();
        clearInterval(t);
        console.log("close connect");
    });
})