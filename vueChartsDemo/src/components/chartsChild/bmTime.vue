<template>
   <div :id="id" class="main"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import Setting from '../../options/bmTimeOption.js'
  export default{
    data(){
      return{
        id:'main_'+Math.round((new Date()).getTime()*Math.random())
      }
    },
    mounted(){
      var myChart = echarts.init(document.getElementById(this.id));
      // myChart.setOption(Option);
      setInterval(function(){
        // let n=Math.ceil(Math.random()*4)
        fetch('/static/data/bm_4/data_1.json').then(function(response) {
          return response.json()
        }).then((json)=>{
          Setting.index+=1
          Setting._data=json;
          myChart.setOption(Setting.options());

        }).catch(function(ex) {
          console.log('parsing failed', ex)
        })
      }, 1000);

    }
  }
</script>
<style>
</style>