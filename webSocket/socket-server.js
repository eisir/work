const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port:8081})

wss.on('connection',function(ws){
  console.log('client connect')
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
    });
})