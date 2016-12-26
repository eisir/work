<template>
  <header>
      <div class="item">
        <h3>进件量</h3>
        <div class="count">{{topData[0]}}</div>
      </div>
      <div class="item">
        <h3>审批量</h3>
        <div class="count">{{topData[1]}}</div>
      </div>
      <div class="item">
        <h3>申请金额</h3>
        <div class="count"><span>￥</span>{{topData[2]}}</div>
      </div>
      <div class="item">
        <h3>贷款金额</h3>
        <div class="count"><span>￥</span>{{topData[3]}}</div>
      </div>
      <div class="item">
        <h3>理财笔数</h3>
        <div class="count">{{topData[4]}}</div>
      </div>
      <div class="item">
        <h3>理财总金额</h3>
        <div class="count"><span>￥</span>{{topData[5]}}</div>{{textData}}
      </div>
      
    </header>
</template>
<script>
  export default{
    data(){
      return {
        topData:[88888,88888,88888,88888,88888,88888,88888],
      }
    },
    mounted(){
      let _this=this;
      setInterval(function(){
        
        let res = [].concat(_this.topData)
        let n=Math.floor(Math.random()*6)
        
        res[n] = res[n]+Math.floor(Math.random()*10)
        _this.topData=res

      }, 2000);
    },
    computed:{      
      textData(){
        return this.$store.state.textData
      }
    }
  }
</script>

<style>
  header{
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: 3.8% auto 1.8%;
    justify-content: space-between;
  }
  header .item{
    background-color: #f00;
    width: 16%;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    color: #f4e925;
  }
  header .item h3{
    margin: 0;
    color:#fff;
    font-size: 1.2rem;
    font-weight: normal;
  }
  header .item .count>span{
    color:#fff;
  }
</style>