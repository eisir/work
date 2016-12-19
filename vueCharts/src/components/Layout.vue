<template>
  <div class="layout">
    <h1>数据展示</h1>
    <div class="pannel-body">
      <div class="data-pannel">
        <mapdata></mapdata>
      </div>
      <div class="data-pannel">
        
      </div>
    </div>      
  </div>
</template>

<script>
import mapdata from './chartsCHild/mapdata'
  export default{
    components:{
      mapdata
    }
  }
</script>

<style>
  h1{
    color:#fff;
  }
  .layout{
    display: flex;
    height: 100%;
    flex-direction: column;
  }
  .pannel-body{
    display: flex;
    flex:1;
    flex-direction: row;
    justify-content: center;
  }
  .data-pannel{
    width: 80%;
    flex:1;
    margin: 0 auto;
    background-color: #fff;
  }
  .main{
    width: 100%;
    height: 100%;
  }
</style>