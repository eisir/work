/*
websocket 测试代码
 */
// var ws = new WebSocket("ws://localhost:8081");
let _url="ws://192.168.20.116:8080/bigdatacenter-bam-web/chart/loanApplyMapWebSocketServer"
var ws = new WebSocket(_url);
  ws.onopen = function (e) {
      console.log('Connection to server opened');
  }
  ws.onmessage=function(e){
    console.log(e.data)
  }
  function sendMessage() {
      ws.send($('#message').val());
  }
