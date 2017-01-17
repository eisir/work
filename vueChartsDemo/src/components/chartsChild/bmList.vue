<template>
  <div :id="id" class="main">
    <div class="title">
     便民最近10笔交易
    </div>
    <div class="legend">
      <div class="item">
        <div class="number">
         <p>交易手机号码</p>
        </div>
        <div class="area">
         <p>交易名称</p>
        </div>
        <div class="total">
         <p>交易金额(元)</p>
        </div>
        <div class="time">
         <p>交易时间</p>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="item in items">
        <div class="number">
          <p>{{item.mobile}}</p>
        </div>
        <div class="area">
          <p>{{item.srcbuSid}}</p>
        </div>
        <div class="total">
          <p>{{item.amount}}</p>
        </div>
        <div class="time">
          <p>{{item.collectTime|getLastMinTimeStr}}</p>
        </div>
      </div>
    </div>
    <div class="loading" v-show='loading'>
     <div class="bg"></div>
     <div class="text">loading...</div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        loading:true,
        id:'main_'+Math.round((new Date()).getTime()*Math.random()),
        items:[]
      }
    },
    mounted(){
      // fetch('/static/data/bm_1/data_1.json').then(function(response) {
      //   return response.json()
      // }).then((json)=>{
      //   this.items=json
      // }).catch(function(ex) {
      //   console.log('parsing failed', ex)
      // }) 
    },
    computed:{
      lists(){
        return this.$store.state.bmListData
      }
    },
    watch:{
      lists(val){
        this.loading=false;
        // console.log(val);
        this.items=val
      }
    }
  }
</script>
<style scoped>
  .title{
    margin-top: 10px;
    margin-bottom: 20px;
    color:#ff4620;
    font-size: 20px;
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