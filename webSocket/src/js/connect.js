/*
websocket 测试代码
 */
var ws = new WebSocket("ws://localhost:8081");
  ws.onopen = function (e) {
      console.log('Connection to server opened');
  }
  ws.onmessage=function(e){
    console.log(e.data)
  }
  function sendMessage() {
      ws.send($('#message').val());
  }
