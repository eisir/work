<template>
  <div :id="id" class="main">
    <div class="title">
     最近10笔业务
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
         <p>申请金额(元)</p>
        </div>
        <div class="time">
         <p>申请时间</p>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="item in lists">
        <div class="number">
          <p>{{item.mobile}}</p>
        </div>
        <div class="area">
          <p :title="item.apcrnames">{{item.apcrnames}}</p>
        </div>
        <div class="total">
          <p>{{item.applyamt}}</p>
        </div>
        <div class="time">
          <p>{{item.collectTimeFmt|getLastMinTimeStr}}</p>
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
        items:[
          {
            mobile:'188****7283',
            apcrnames:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            apcrnames:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            apcrnames:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            apcrnames:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            apcrnames:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            apcrnames:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            apcrnames:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            apcrnames:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            apcrnames:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          },
          {
            mobile:'188****7283',
            apcrnames:'浙江',
            applyamt:'18000',
            collectTimeFmt:'2016-09-09 12:00'
          }
        ]
      }
    },
    mounted(){
        let _this=this       
      
        
        // fetch('/static/data/xd_1/data_1.json').then(function(response) {
        //   return response.json()
        // }).then((json)=>{
        //   _this.items=json
        // }).catch(function(ex) {
        //   console.log('parsing failed', ex)
        // })

    },
    computed:{
      lists(){
        return this.$store.state.xdListData
      }
    },
    watch:{
      lists(val){
        this.loading=false;
        this.items=Object.assign({},this.items,val)
      }
    }
  }
</script>
<style scoped>
  .title{
    margin-top: 10px;
    margin-bottom: 10px;
    color:#ff4620;
    font-size: 20px;
  }
  .theme_kj .item{
    color:#fff;
  }
  .item{
    display: flex;
    flex-direction: row;
  }
  .item>div{
    flex:3;
    font-size: .8rem;
    align-content: center;
    align-items: center;
    display: flex;
    overflow: hidden;
  }
  .item>div.time{
    flex:4;
  }
  .item>div p{
    width: 100%;
    margin: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
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
    margin-bottom: 10px;
  }
  .list .item{
    flex:1;
  }
</style>