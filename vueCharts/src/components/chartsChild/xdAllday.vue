<template>
   <div class="main">
    <div  :id="id" class="inner"></div>
     <div class="loading" v-show='loading'>
       <div class="bg"></div>
       <div class="text">loading...</div>
     </div>
   </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import Setting from '../../options/xdAlldayOption.js'
import getData from '../../utils/getData';
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

      Setting.theme=this.$store.state.theme;
      let option=Setting._option();
      myChart.setOption(option);


      
    },
    computed:{
      getData(){
        return this.$store.state.xdDayData;
      }
    },
    watch:{
      getData:function(val){
        this.loading=false;
        // console.log(val);
        Setting._data=val;
        let t=(new Date()).getTime();
        myChart.setOption(Setting.option());
        console.log((new Date()).getTime()-t);
      }
    }
  }
</script>
<style>
</style>