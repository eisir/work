<template>
   <div class="main">
     <div class="inner">
      <div :id="id" class="canvas"></div>   
     </div>
     <div class="dataList">
       <div class="item" v-for='item in items'>
         <div class="label">{{item.name}}</div>
         <div class="data">{{item.value}}</div>
       </div>
     </div>
     <div class="loading" v-show='loading'>
       <div class="bg"></div>
       <div class="text">loading...</div>
     </div>
   </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import Setting from '../../options/mapOption.js'

var myChart,oldNode;

  export default{
    data(){
      return{
        loading:true,
        id:'main_'+Math.round((new Date()).getTime()*Math.random()),
        items:[]
      }
    },
    mounted(){
      oldNode=document.getElementById(this.id)
      myChart = echarts.init(oldNode);
      Setting.theme=this.$store.state.theme;
      var option=Setting._option();      
      myChart.setOption(option); 
    },
    computed:{
      getData(){
        return this.$store.state.xdMapData
      },
      getCity(){
        return this.$store.state.xdCityData
      }
    },
    watch:{
      getData:function(val){
        this.loading=false;
        Setting._data=val;
        
        myChart.setOption(Setting.option());
      },
      getCity:function(val){
        this.loading=false;
        Setting._cityData=val;
        

        let effectData={}
        let oldData={}
        let _oData=myChart.getOption().series[0].data
        _oData.forEach(function(n,index){
          oldData[n.name]=n.value;
        })
        let tempO={}
        val.forEach(function(n){
          tempO[n.name]=n.value
        })
        var i=0,arrData=[]

        for(let k in oldData){
          if(tempO[k]){
            if(oldData[k][2]!=tempO[k]){
              effectData[k]=tempO[k];

              arrData[i]={};
              arrData[i].name=k;
              arrData[i].value=oldData[k];
              arrData[i].value[2]=tempO[k]
              i++;

            }
          }
        }
        var j=0;
        if(arrData.length>0){
          myChart.setOption({
            series:[{},{},{},{
              
              data: arrData,
              symbolSize: function(val) {
                  // return 10+(val[2] / 1000)+Math.sin(j*2*Math.PI/360)*20;
                  return 4+(val[2] / 1000);
              }                
            }]
          });
          setTimeout(function(){
             myChart.setOption({
                series:[{},{},{},{
                  data:[]
                }]
              });
          }, 500);       
        }
        myChart.setOption(Setting.cityOption());
        this.items=val.slice(0,10);



        
      }
    }
  }
</script>
<style scoped>

  .main{
    position: relative;
  }
  .dataList{
    position: absolute;
    right: 20px;
    top: 4rem;
    width: 7rem;
    display:flex;
    flex-direction: column;
    height: 80%;
    /*border: 1px solid #ddd;*/
  }
  .dataList .item{
    display: flex;
    flex-direction: row;
    /*flex:1;*/
  }
  .dataList .item>div{
    text-align: left;
    font-size: .75rem;
    line-height: 1.4rem;
  }
  .dataList .item>div.label{
    text-align: left;
    /*flex:1;*/
  }
  .dataList .item>div.data{
    /*width:3.2rem;*/
    padding-left: 0.4rem;
    text-align: left;
  }
  .theme_kj .dataList .item{
    color: #fff;
  }
</style>