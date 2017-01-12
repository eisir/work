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

      // var data=[]
      let option=Setting._option
      myChart.setOption(option);


      // Setting._data=this.getData;
      // myChart.setOption(Setting.option());

      let _this=this   

      // fetch('/static/data/xd_3/data_1.json').then(function(response) {
      //   return response.json()
      // }).then((json)=>{
      //   // console.log(json)

      //   Setting._data=json;
      //   myChart.setOption(Setting.options());


      // }).catch(function(ex) {
      //   console.log('parsing failed', ex)
      // })    
      
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
        myChart.setOption(Setting.option());
      }
    }
  }
</script>
<style>
</style>