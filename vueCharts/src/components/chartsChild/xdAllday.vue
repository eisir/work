<template>
   <div :id="id" class="main"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import Setting from '../../options/xdAlldayOption.js'
import getData from '../../utils/getData';

  export default{
    data(){
      return{
        id:'main_'+Math.round((new Date()).getTime()*Math.random())
      }
    },
    mounted(){

      var myChart = echarts.init(document.getElementById(this.id));
      // var data=[]
      // var option=Setting.options()
      // myChart.setOption(option);

      let _this=this   

      fetch('/static/data/xd_3/data_1.json').then(function(response) {
        return response.json()
      }).then((json)=>{
        // console.log(json)

        Setting._data=json;
        myChart.setOption(Setting.options());


      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })    
      
    }
  }
</script>
<style>
</style>