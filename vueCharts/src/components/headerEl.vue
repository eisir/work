<template>
  <header>
      <div class="item">
        <h3>新增用户数</h3>
        <div class="count">{{topData.lmps_001}}</div>
      </div>
      <div class="item">
        <h3>交易总笔数</h3>
        <div class="count">{{topData.lmps_003}}</div>
      </div>
      <div class="item">
        <h3>交易总金额 <span>(元)</span></h3>
        <div class="count">{{topData.lmps_004}}</div>
      </div>
      <div class="item">
        <h3>活跃用户数</h3>
        <div class="count">{{topData.lmps_002}}</div>
      </div>
      
    </header>
</template>
<script>
  export default{
    data(){
      return {
        topData:{
          lmps_001:'',
          lmps_002:'',
          lmps_003:'',
          lmps_004:'',
        },
      }
    },
    mounted(){
      // let _this=this;
      // setInterval(function(){
        
      //   let res = [].concat(_this.topData)
      //   let n=Math.floor(Math.random()*6)
        
      //   res[n] = res[n]+Math.floor(Math.random()*10)
      //   _this.topData=res

      // }, 2000);
    },
    computed:{ 
      lists(){
        return this.$store.state.HeadData
      }
    },
    watch:{
      lists:function(val){
        if(val){
          this.topData=val
        }
      }
    }
  }
</script>

<style>
</style>