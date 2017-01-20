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
    <transition-group name="list" tag="div" class="list">
      <div class="item" v-for="item in itemList" v-bind:key="item.collectTimeFmt">
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
    </transition-group>
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
        ],
        temArr:[],
        listState:0
      }
    },
    mounted(){

    },
    computed:{
      lists(){
        return this.$store.state.xdListData
      },
      itemList(){
        let arr=[];
        if(this.listState==0){
          arr=this.lists;
          this.temArr=this.lists;
          this.listState=1;
        }else{
          this.temArr=[].concat(this.temArr).reverse().concat(this.lists.reverse()).reverse();
          arr=this.temArr.slice(0,10);
        }
        return arr
      }
    },
    watch:{
      lists(val){
        this.loading=false;
        // console.log(val);
        this.items.push(val);
        this.items=this.items.slice(-10);
        // this.temArr.unshift(val);
      }
    }
  }
</script>
<style scoped lang="scss">
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
    flex-direction: column;
    margin-bottom: 10px;
  }
  .list .item{
    height: 10%;
    width: 100%;
  }


  .list .item{
    transition: all .3s;
  }
 
  .list-enter{
    transform: translateY(-20px);
    opacity: 0;
  }
  .list-enter-active { 
  } 
  .list-leave-to{    
    opacity: 0;
    transform: translateY(20px);
  }
  .list-leave-active{    
    position: absolute;
  }
</style>