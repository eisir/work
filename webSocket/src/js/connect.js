/*
websocket 测试代码
 */
// var ws = new WebSocket("ws://localhost:8081");
// let _url="ws://192.168.0.212:38081/bigdatacenter-bam-web/chart/loanWebSocketServer"
let _url="ws://192.168.19.141:8081"

var ws = new WebSocket(_url);
  ws.onopen = function (e) {
      console.log('Connection to server opened');
  }
  ws.onmessage=function(e){
    console.log(e.data)
  }
  ws.onerror=function(e){

    
  }
  function sendMessage() {
      ws.send($('#message').val());
  }
