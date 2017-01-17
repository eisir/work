<template>
  <header>
      <div class="item">
        <h3>进件量</h3>
        <div class="count">{{topData.loan_001}}</div>
      </div>
      <div class="item">
        <h3>审批量</h3>
        <div class="count">{{topData.loan_002}}</div>
      </div>
      <div class="item">
        <h3>申请金额 <span>(元)</span></h3>
        <div class="count">{{topData.loan_003}}</div>
      </div>
      <div class="item">
        <h3>贷款金额 <span>(元)</span></h3>
        <div class="count">{{topData.loan_004}}</div>
      </div>
      <div class="item">
        <h3>理财笔数</h3>
        <div class="count">{{topData.lfp_005}}</div>
      </div>
      <div class="item">
        <h3>理财总金额 <span>(元)</span></h3>
        <div class="count">{{topData.lfp_006}}</div>
      </div>      
    </header>
</template>
<script>
  export default{
    data(){
      return {
        topData:{
          loan_001:'',
          loan_002:'',
          loan_003:'',
          loan_004:'',
          lfp_005:'',
          lfp_006:''
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