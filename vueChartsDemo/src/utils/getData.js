 let getData=function(url,fn){
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


          setInterval(sendMessage, 60000);


          function sendMessage() {
              ws.send('send msg');
          }
        }

export default getData