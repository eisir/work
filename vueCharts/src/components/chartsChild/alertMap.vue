<template>
   <div class="main">
     <div class="inner">
      <div :id="id" class="canvas"></div>   
     </div>
     <transition-group name="map-list" tag="div" class="dataList">
        <div class="item map-list-item" v-for='item in items' v-bind:key="item.name">
          <transition-group name="map-item" tag="div">
              <div class="itemInner" v-bind:key="item.value">
                <div class="label">{{item.name}}</div>
                <div class="data">{{item.value}}</div>
              </div>           
          </transition-group>
        </div>
      </transition-group>
     <div class="loading" v-show='loading'>
       <!-- <div class="bg"></div> -->
       <div class="text">loading...</div>
     </div>
   </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import Setting from '../../options/alertMapOption.js'

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
      console.log(this.getData);
    },
    computed:{
      getData(){
        return this.$store.state.xdMapData
      }
      // getCity(){
      //   return this.$store.state.xdCityData
      // }
    },
    watch:{
      getData:function(val){
        if(this.$store.state.alertMapOpen){          
          if(val.pData){
            Setting._data=val.pData;
          }
          if(val.cityData){
            Setting._cityData=val.cityData;
            this.items=val.cityData.slice(0,10);
            let _oData=myChart.getOption().series[0].data  
            let effectData={}
            let oldData={}
            
            _oData.forEach(function(n,index){
              oldData[n.name]=n.value;
            })
            let tempO={}
            val.cityData.forEach(function(n){
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
            if(arrData.length>0){
              Setting._efData=arrData
              // Queue.add(function(){
                myChart.setOption(Setting.option());
                // setTimeout(function(){
                  myChart.setOption({
                      series:[{},{},{},{
                        data:[]
                      }]
                    });
                // }, 0);  
              // },'map01');
              
                   
            }else{
              // Queue.add(function(){
                myChart.setOption(Setting.option());
              // },'map01');
            }
          }
          this.loading=false;
        }
      }      
    }
  }
</script>
<style scoped>

/*****
动画 Start
****
 */
.itemInner{
  display: flex;
}
.map-list{
  width: 200px;
  text-align: left;
  margin: 0 auto;
}
.map-list>div{
  transition: all .5s ease;
}
.map-list-enter-active {
  transition: all .8s ease;
}
.map-list-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.map-list-enter
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
.map-list-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
.map-list-leave-active{
  position: absolute;
}



.map-item-enter-active{
  transition: all 1.5s ease;
}
.map-item-leave-active{
  transition: all .1s ease;
}
.map-item-enter-to,
.map-item-enter-active {
  color:#f00;
}
.map-item-leave-active{
  position: absolute;
  color:#f00;
}


/*****
动画 End
****
 */


  .main{
    position: relative;
  }
  .dataList{
    position: absolute;
    right: -1rem;
    top: 50%;
    margin-top: -5rem;
    width: 10rem;
    display:flex;
    flex-direction: column;
    height: 20rem;
    /*border: 1px solid #ddd;*/
  }
  .dataList .item{
    display: flex;
    height: 10%;
    flex-direction: row;
    flex:1;
  }
  .dataList .item>div{
    text-align: left;
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
  .dataList .item div.label{
    text-align: left;
    /*flex:1;*/
  }
  .dataList .item div.data{
    /*width:4rem;*/
    padding-left: 1rem;
    text-align: left;
  }
  .theme_kj .dataList .item{
    color: #fff;
  }
</style>