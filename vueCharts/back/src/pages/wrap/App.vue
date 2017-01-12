<template>
  <div id="app">

    <iframe src="/top.html" width="100%" height="40"></iframe> 
    <div class="test">{{testData}}</div>
    <iframe src="/index.html" width="100%" height="800"></iframe> 
  </div>
</template>


<script>
import $ from 'jquery'
export default {
  data(){
    return {
      testData:0,
      items:[
        {
          text:'APP用户数',
          val:0,
          unit:''
        },
        {
          text:'新增APP用户数',
          val:0,
          unit:''
        },
        {
          text:'信贷进件量',
          val:0,
          unit:''
        },
        {
          text:'信贷贷款金额',
          val:0,
          unit:'元'
        },
        {
          text:'理财-活期笔数',
          val:0,
          unit:''
        },
        {
          text:'理财-活期金额',
          val:0,
          unit:'元'
        },
        {
          text:'理财-定期笔数',
          val:0,
          unit:''
        },
        {
          text:'理财-定期金额',
          val:0,
          unit:'元'
        },
        {
          text:'便民交易笔数',
          val:0,
          unit:''
        },
        {
          text:'便民交易总金额',
          val:0,
          unit:'元'
        }
      ]
    }
  },
  mounted(){
    setInterval(()=>{
        this.testData++
      }, 1);
  }
}
</script>

<style lang="scss">
// @import '../../assets/base.scss';
html,body{
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: #404a59;
}
.test{
  color:#fff;
  font-size: 30px;
  text-align: center;
}

</style>