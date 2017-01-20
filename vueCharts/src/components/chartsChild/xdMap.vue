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
       <div class="bg"></div>
       <div class="text">loading...</div>
     </div>
   </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import Setting from '../../options/mapOption.js'
import 'lodash'

var myChart,oldNode;

  export default{
    data(){
      return{
        loading: true,
        id:'main_'+Math.round((new Date()).getTime()*Math.random()),
        items:[{
          name: "",
          value: "",
          class:""
        },{
          name: "",
          value: "",
          class:""
        },{
          name: "",
          value: "",
          class:""
        },{
          name: "",
          value: "",
          class:""
        },{
          name: "",
          value: "",
          class:""
        },{
          name: "",
          value: "",
          class:""
        },{
          name: "",
          value: "",
          class:""
        },{
          name: "",
          value: "",
          class:""
        },{
          name: "",
          value: "",
          class:""
        },{
          name: "",
          value: "",
          class:""
        }]
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
      }
      // getCity(){
      //   return this.$store.state.xdCityData
      // }
    },
    watch:{
      getData:function(val){
        if(!this.$store.state.alertMapOpen){
          if(val.pData){
            Setting._data=val.pData;
          }
          if(val.cityData){
            Setting._cityData=val.cityData;
            // this.items=val.cityData.slice(0,10);
            val.cityData.slice(0,10).forEach((n,index)=>{
              if(this.items[index].name!=n.name||this.items[index].value!=n.value){
                this.items[index].name=n.name
                this.items[index].value=n.value
              }
            });
            
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
                // }, 500);
              // },'map01');
              
                   
            }else{
              // Queue.add(function(){
                myChart.setOption(Setting.option());
              // },'map01');
            }
          }
        }
        this.loading=false;
      }
    }
  }

</script>

<style scoped lang="scss">


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
    right: 20px;
    top: 20%;
    width: 7rem;
    // display:flex;
    flex-direction: column;
    height: 70%;
    /*border: 1px solid #ddd;*/
  }
  .dataList .item{
    height: 10%;
    width: 100%;
    display: flex;
    flex-direction: row;
    /*flex:1;*/
  }
  .dataList .item>div{
    text-align: left;
    font-size: .75rem;
    line-height: 1.4rem;
  }
  .dataList .item div.label{
    text-align: left;
    /*flex:1;*/
  }
  .dataList .item div.data{
    /*width:3.2rem;*/
    padding-left: 0.4rem;
    text-align: left;
  }
  .theme_kj .dataList .item{
    color: #fff;
  }
</style>