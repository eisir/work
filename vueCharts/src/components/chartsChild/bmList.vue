<template>
  <div :id="id" class="main">
    <div class="title">
     便民最近10笔交易
    </div>
    <div class="legend">
      <div class="item">
        <div class="number">
         <p>手机号</p>
        </div>
        <div class="area">
         <p>订单号</p>
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
          <p>{{item.custId}}</p>
        </div>
        <div class="total">
          <p>{{item.retCode}}</p>
        </div>
        <div class="time">
          <p>{{item.receiveTime|getLastTimeStr}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        id:'main_'+Math.round((new Date()).getTime()*Math.random()),
        items:[]
      }
    },
    mounted(){
      fetch('/static/data/bm_1/data_1.json').then(function(response) {
        return response.json()
      }).then((json)=>{
        this.items=json
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
    font-size: 18px;
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