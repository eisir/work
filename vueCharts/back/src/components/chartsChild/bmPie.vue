<template>
  <div class="main">
    <div :id="id" class="inner"></div>
    <div class="loading" v-show='loading'>
     <div class="bg"></div>
     <div class="text">loading...</div>
    </div>
   </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import Setting from '../../options/pieOption.js'
var myChart
  export default{
    data(){
      return{
        loading:true,
        id:'main_'+Math.round((new Date()).getTime()*Math.random())        
      }
    },
    mounted(){
      myChart = echarts.init(document.getElementById(this.id));
      var option=Setting._option
      myChart.setOption(option);

      // setInterval(function(){
      //   let n=Math.ceil(Math.random()*4)
      //   fetch('/static/data/bm_2/data_'+n+'.json').then(function(response) {
      //     return response.json()
      //   }).then((json)=>{

      //     Setting._data=json;
      //     myChart.setOption(Setting.options());

      //   }).catch(function(ex) {
      //     console.log('parsing failed', ex)
      //   })
      // }, 1000);      
    },
    computed:{
      getData(){
        return this.$store.state.bmPieData
      }
    },
    watch:{
      getData:function(val){
        this.loading=false;
        Setting._data=val;
        myChart.setOption(Setting.options());
      }
    }
  }
</script>
<style>

</style>