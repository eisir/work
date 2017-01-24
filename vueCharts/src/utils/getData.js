 let getData=function(url,fn){
  let TimerTiket,TimerTiketMsg;
  connect(url,fn);
  function connect(url,fn){
          let _url=url
          let ws = new WebSocket(_url);
          ws.onopen = function (e) {
              // console.log('Connection to server opened');
              clearInterval(TimerTiket);
          }
          ws.onmessage=function(e){
            var str =e.data
            var str=eval("(" + str + ")");
            fn(str)
          }
          ws.onerror=function(){
            console.log('error');

            // restart
            // clearInterval(TimerTiket);
            // TimerTiket=setInterval(function(){
            //   connect(url,fn);
            // }, 2000);
          }
          ws.onclose=function(){
            console.log('close');
            
            // restart
            clearInterval(TimerTiket);
            clearInterval(TimerTiketMsg);
            TimerTiket=setInterval(function(){
              connect(url,fn);
              console.log('reconnect...');
            }, 2000);
          }

          TimerTiketMsg=setInterval(sendMessage, 5000);


          function sendMessage() {
              ws.send('send msg');
          }
  }
}

export default getData