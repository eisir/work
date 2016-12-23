<template>
  <div class="layout">
    <top></top> 
    <head-el></head-el>
    <div class="pannel-body">
      <div class="data-pannel">
        <xd-list></xd-list>
      </div>
      <div class="data-pannel">
        <mapdata></mapdata>
      </div>
      <div class="data-pannel">
        <xd-Allday></xd-Allday>
      </div>
      <div class="data-pannel">
        <fif-trade></fif-trade>
      </div>
    </div>      
  </div>
</template>

<script>
import 'echarts'
import top from './top'
import headEl from './headEl'
import mapdata from './chartsCHild/mapdata'
import areaStack from './chartsCHild/areaStack'
import xdAllday from './chartsCHild/xdAllday'
import fifTrade from './chartsCHild/fifTrade'
import xdList from './chartsCHild/xdList'
  export default{
    components:{
      top,
      headEl,
      mapdata,
      areaStack,
      xdAllday,
      fifTrade,
      xdList
    }
  }
</script>

<style>
  h1{
    color:#fff;
    font-size: 1.5rem;
  }
  .layout{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-image: url('../assets/them_red.png');
    background-size: 100%;
  }
  

  /*
  header
   */
  
  .pannel-body{
    display: flex;
    flex:1;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
  }
  .data-pannel{
    margin: 0;
    width: 49.5%;
    height: 48%;
    background-color: #fff;
    border-radius: 0.3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main{
    width: 90%;
    margin: 0 auto;
    height: 90%;
  }
</style>