<template>
  <div class="layout">
    <h1>数据展示</h1>
    <div class="data-pannel">
      <div id="main"></div>
    </div>      
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
// import Option from '../options/option.js'

  export default{
    mounted(){
      var myChart = echarts.init(document.getElementById('main'));
      myChart.setOption(Option);
    }
  }
</script>

<style>
  h1{
    color:#fff;
  }
  .layout{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
  }
  .data-pannel{
    width: 80%;
    flex:1;
    margin: 0 auto 40px;
    background-color: #fff;
  }
</style>