<template>
  <div class="layout">
    <top></top> 
    <head-el></head-el>
    <div class="pannel-body">
      <div class="data-pannel">
        <bm-list></bm-list>
      </div>
      <div class="data-pannel">
        <bm-pie></bm-pie>
      </div>
      <div class="data-pannel">
        <bm-trade></bm-trade>
      </div>
      <div class="data-pannel">
        <bm-time></bm-time>
      </div>
    </div>      
  </div>
</template>

<script>
import 'echarts'
import top from './toper'
import headEl from './headerEl'
import bmPie from './chartsCHild/bmPie'
import bmTrade from './chartsCHild/bmTrade'
import bmTime from './chartsCHild/bmTime'
import bmList from './chartsCHild/bmList'
  export default{
    components:{
      top,
      headEl,
      bmPie,
      bmTrade,
      bmTime,
      bmList
    },
    mounted(){
      // let url="ws://localhost:8081/xd_1"
      //   getData(url,function(data){
      //     console.log(data)
      //   })
        let _this=this
      this.$store.dispatch('getData',{xd:false})
    }
  }
</script>

<style>
  
  header{
    display: flex;
    flex-direction: row;
    width: 60%;
    margin: 3rem auto 1.5rem;
    justify-content: space-between;
  }
  header .item{
    background-color: #f00;
    width: 24%;
    border-radius: 0.3rem;
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    color: #f4e925;
  }
  header .item h3{
    margin: 0;
    color:#fff;
  }
  header{    
    width: 60%;
    margin: 4rem auto 1.4rem;
  }
  header .item{
    width: 24%;
  }


</style>