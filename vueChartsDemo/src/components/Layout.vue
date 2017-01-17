<template>
  <div class="layout">
    <top></top> 
    <head-el></head-el>
    <div class="pannel-body">
      <div class="data-pannel">
        <xd-list></xd-list>
      </div>
      <div class="data-pannel">
        <xd-map></xd-map>
      </div>
      <div class="data-pannel">
        <xd-Allday></xd-Allday>
      </div>
      <div class="data-pannel">
        <xd-trade></xd-trade>
      </div>
    </div>
    <div class="mapBd" v-if="mapAlert" v-show="showAlert">
      <div class="mapInner">
        <alert-map></alert-map>
        <!-- <div class="closeBtn" @click="closeMap">X</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import 'echarts'
import getData from '../utils/getData';

import top from './top'
import headEl from './headEl'

import xdMap from './chartsCHild/xdMap'
import alertMap from './chartsCHild/alertMap'
import xdAllday from './chartsCHild/xdAllday'
import xdTrade from './chartsCHild/xdTrade'
import xdList from './chartsCHild/xdList'
  export default{
    data(){
      return {
        showAlert:true,
        mapAlert:false
      }
    },
    components:{
      top,
      headEl,
      xdMap,
      xdAllday,
      xdTrade,
      xdList,
      alertMap
    },
    mounted(){
      let _this=this
      this.$store.dispatch('getData',{xd:true});
      $(document).keyup(function(e){
        // console.log(e.keyCode);
        if(e.keyCode==27){
          _this.showAlert=false;
        }

        // this.$store.dispatch('getData',{xd:true});
      }); 
      $(document).keydown(function(e){        
        if(e.ctrlKey && e.keyCode==13){
          // console.log(12313);
          // _this.$emit('showMap');               
        
          if(!_this.mapAlert){
            _this.mapAlert=true;
          }else{
            _this.showAlert=true
          }
          // console.log('show');
        }
      })
    },
    methods:{
      showMap(){
        let _this=this       
        
        // .focus();
        if(!this.mapAlert){
          this.mapAlert=true;
        }else{
          this.showAlert=true
        }
      },
      closeMap(){
        this.showAlert=false
      }
    }
  }
</script>

<style lang="scss">
  
  header{    
    width: 80%;
  }
  header .item{
    width: 16%;
  }
  .mapBd{
    position: absolute;
    z-index: 10000;
    width:100%;
    height: 100%;
    left: 0;
    top:0;
    background-color: #fff;
  }
  .theme_kj .mapBd{
    background-size: 100%;
    background-image: url('../assets/img/theme_kj.png');
  }
  .mapBd .mapInner{
    height: 90%;
    width:80%;
    margin: 2% auto 0;
  }
  .closeBtn{
    font-size: 2rem;
    position: absolute;
    right: 2rem;
    top:2rem;
    cursor: pointer;
  }
</style>