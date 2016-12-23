<template>
   <div class="main">
     <div :id="id" class="inner">       
     </div>
     <div class="dataList">
       <div class="item" v-for='item in items'>
         <div class="label">{{item.name}}</div>
         <div class="data">{{item.value}}</div>
       </div>
     </div>
   </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import Setting from '../../options/mapOption.js'
  export default{
    data(){
      return{
        id:'main_'+Math.round((new Date()).getTime()*Math.random()),
        items:[]
      }
    },
    mounted(){
      var myChart = echarts.init(document.getElementById(this.id));
      var option=Setting._option
      myChart.setOption(option);

      fetch('/static/data/xd_2/data_1.json').then(function(response) {
        return response.json()
      }).then((json)=>{
        // console.log(json)
        let _json = json.sort(function(a, b) {
            return b.value - a.value;
        })

        Setting._data=_json;
        myChart.setOption(Setting.option());

        this.items=_json.splice(0,10)


      }).catch(function(ex) {
        console.log('parsing failed', ex)
      }) 
    }
  }
</script>
<style scoped>
  .inner{
    width: 100%;
    height: 100%;
  }
  .main{
    position: relative;
  }
  .dataList{
    position: absolute;
    right: 4%;
    top: 10%;
    width: 24%;
    display:flex;
    flex-direction: column;
    height: 80%;
    border: 1px solid #ddd;
  }
  .dataList .item{
    display: flex;
    flex-direction: row;
    flex:1;
  }
  .dataList .item>div{
    text-align: center;
    width: 50%;
    font-size: .8rem;
  }
  .dataList .item>div.label{
    text-align: right;
  }

</style>