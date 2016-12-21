<template>
   <div :id="id" class="main"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import Option from '../../options/lineOption.js'
  export default{
    data(){
      return{
        id:'main_'+Math.round((new Date()).getTime()*Math.random())
      }
    },
    mounted(){
      var myChart = echarts.init(document.getElementById(this.id));
      myChart.setOption(Option);
    }
  }
</script>
<style>
  

</style>