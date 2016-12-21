<template>
  <div :id="id" class="main">
    <div class="title">
     信贷最近10笔进件
    </div>
    <div class="legend">
      <div class="item">
        <div class="number">
         手机号
        </div>
        <div class="area">
         地区
        </div>
        <div class="total">
         申请金额
        </div>
        <div class="time">
         申请时间
        </div>
      </div>
    </div>
    <div class="list">
      <div class="item" v-for="item in items">
        <div class="number">
          {{item.number}}
        </div>
        <div class="area">
          {{item.area}}
        </div>
        <div class="total">
          {{item.total}}
        </div>
        <div class="time">
          {{item.time}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        id:'main_'+Math.round((new Date()).getTime()*Math.random()),
        items:[
          {
            number:'188****7283',
            area:'浙江',
            total:'18000',
            time:'2016-09-09 12:00'
          },
          {
            number:'188****7283',
            area:'浙江',
            total:'18000',
            time:'2016-09-09 12:00'
          },
          {
            number:'188****7283',
            area:'浙江',
            total:'18000',
            time:'2016-09-09 12:00'
          },
          {
            number:'188****7283',
            area:'浙江',
            total:'18000',
            time:'2016-09-09 12:00'
          },
          {
            number:'188****7283',
            area:'浙江',
            total:'18000',
            time:'2016-09-09 12:00'
          },
          {
            number:'188****7283',
            area:'浙江',
            total:'18000',
            time:'2016-09-09 12:00'
          },
          {
            number:'188****7283',
            area:'浙江',
            total:'18000',
            time:'2016-09-09 12:00'
          },
          {
            number:'188****7283',
            area:'浙江',
            total:'18000',
            time:'2016-09-09 12:00'
          },
          {
            number:'188****7283',
            area:'浙江',
            total:'18000',
            time:'2016-09-09 12:00'
          },
          {
            number:'188****7283',
            area:'浙江',
            total:'18000',
            time:'2016-09-09 12:00'
          }
        ]
      }
    },
    mounted(){
    }
  }
</script>
<style>
  .title{
    margin-bottom: 10px;
  }
  .item{
    display: flex;
    flex-direction: row;
  }
  .item>div{
    flex:1;
    font-size: .6rem;
    line-height: 1.125rem;
  }
  .legend .item>div{
    font-size: 18px;
  }

</style>