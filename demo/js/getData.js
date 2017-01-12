 var getData=function(url,fn){
          let _url=url
          let ws = new WebSocket(_url);
          ws.onopen = function (e) {
              console.log('Connection to server opened');
          }
          ws.onmessage=function(e){
            var str =e.data
            var str=eval("(" + str + ")");
            fn(str)
          }
          function sendMessage() {
              ws.send('123');
          }
        }
