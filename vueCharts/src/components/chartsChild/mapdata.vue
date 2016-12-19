<template>
   <div :id="id" class="main"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import Option from '../../options/mapOption.js'
  export default{
    data(){
      return{
        id:'main-'+Math.floor((new Date()).getTime()*Math.random())
      }
    },
    mounted(){
      console.log(this.id);
      var myChart = echarts.init(document.getElementById(this.id));
      myChart.setOption(Option);
    }
  }
</script>
<style>
  
  
</style>