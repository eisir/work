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
import Setting from '../../options/xdTradeOption.js'

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
      let option=Setting._option
      myChart.setOption(option);
      // Setting._data=this.getData;
      // myChart.setOption(Setting.option());

    },
    computed:{
      getData(){
        return this.$store.state.xdTradeData;
      }
    },
    watch:{
      getData:function(val){
        this.loading=false;
        Setting._data=val;
        myChart.setOption(Setting.option());
        this.items=val.slice(0,10);
      }
    }
  }
</script>
<style>
  

</style>