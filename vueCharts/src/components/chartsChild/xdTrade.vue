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
      Setting.theme=this.$store.state.theme;
      let option=Setting._option();
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
        if(!this.$store.state.alertMapOpen){          
          Setting._data=val;
          
          // Queue.add(function(){
            myChart.setOption(Setting.option());
          // },'trade');
          this.loading=false;
        }
      }
    }
  }
</script>
<style>
  

</style>