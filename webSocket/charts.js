const WebSocketServer = require('ws').Server
const wss = new WebSocketServer({port:8081})
let fs = require('fs')
// let getData=require('./sendData/index')
import getData from './sendData/index'

wss.on('connection',function(ws){
  let reqUrl=ws.upgradeReq.url
  console.log(reqUrl)


  console.log('client connect')
  var msg=""
  ws.on('message',function(message){
    console.log(message)
    msg=message;
  })
  console.log(getData.cityData);
  var i=0;
  var t=setInterval(function(){
    // let readUrl='./static'+reqUrl+'/data_'+Math.ceil(Math.random()*4)+'.json'
    // fs.readFile(readUrl,"utf-8",function(err,data){
    //   ws.send(data)
    //   // ws.send(i+'-----')
    //   i++
    // })
    // ws.send(getData)
    ws.send(i+'-----')
  }, 2000)
  


  // var i=0;
  // var t=setInterval(function(){
  //   ws.send(i+"----"+msg);
  //   i++
  // }, 2000)
  ws.on('close', function () {
        // closeSocket();
        clearInterval(t);
    });
})