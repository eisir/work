<template>
  <div class="layout">
    <div class="top_tips">
      <span class="text">
        新增用户数：88888
      </span>
      <span class="text">
        交易总金额：888888
      </span>
      <span class="text">
        交易总笔数：888888
      </span>
    </div>
    <header>
      <div class="item">
        <h3>新增用户</h3>
        <div class="count">88888</div>
      </div>
      <div class="item">
        <h3>交易总金额</h3>
        <div class="count">88888</div>
      </div>
      <div class="item">
        <h3>交易总笔数</h3>
        <div class="count">88888</div>
      </div>
      <div class="item">
        <h3>活跃用户</h3>
        <div class="count">88888</div>
      </div>
    </header>
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
import bmPie from './chartsCHild/bmPie'
import bmTrade from './chartsCHild/bmTrade'
import bmTime from './chartsCHild/bmTime'
import bmList from './chartsCHild/bmList'
  export default{
    components:{
      bmPie,
      bmTrade,
      bmTime,
      bmList
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

  /*
  header
   */
  .top_tips{
    position: absolute;
    right: 10%;
    top: 2.4%;
    margin-top: -1rem;
    line-height: 2rem;
    color:#f4e925;
  }
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