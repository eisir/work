<template>
  <div :id="id" class="main">
    <div class="title">
     信贷最近10笔进件
    </div>
    <div class="legend">
      <div class="item">
        <div class="number">
         <p>手机号</p>
        </div>
        <div class="area">
         <p>地区</p>
        </div>
        <div class="total">
         <p>申请金额</p>
        </div>
        <div class="time">
         <p>申请时间</p>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="item in items">
        <div class="number">
          <p>{{item.mobile}}</p>
        </div>
        <div class="area">
          <p>{{item.belongProvince}}</p>
        </div>
        <div class="total">
          <p>{{item.applyamt}}</p>
        </div>
        <div class="time">
          <p>{{item.collectTimeFmt|getLastTimeStr}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import getData from '../../utils/getData';

  export default{
    data(){
      return{
        id:'main_'+Math.round((new Date()).getTime()*Math.random()),
        items:[
          {
            mobile:'188****7283',
            belongProvince:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            belongProvince:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            belongProvince:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            belongProvince:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            belongProvince:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            belongProvince:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            belongProvince:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            belongProvince:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            belongProvince:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            belongProvince:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          }
        ]
      }
    },
    mounted(){
        let _this=this       
      
        // let url="ws://localhost:8081/xd_1"
        // getData(url,function(data){
        //   _this.items=data
        // })
        // 
        // 
        fetch('/static/data/xd_1/data_1.json').then(function(response) {
          return response.json()
        }).then((json)=>{
          _this.items=json
        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })

    }
  }
</script>
<style scoped>
  .title{
    margin-bottom: 10px;
    color:#ff4620;
    font-size: 24px;
  }
  .item{
    display: flex;
    flex-direction: row;
  }
  .item>div{
    flex:1;
    font-size: .8rem;
    align-content: center;
    align-items: center;
    display: flex;
  }
  .item>div p{
    width: 100%;
    margin: 0;
  }
  .legend{
    margin-bottom: .2rem;
  }
  .legend .item>div{
    font-size: .9rem;
  }
  .main{
    display: flex;
    flex-direction: column;
  }
  .list{
    flex:1;
    display: flex;
    flex-direction: column;
  }
  .list .item{
    flex:1;
  }
</style>