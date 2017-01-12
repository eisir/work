<template>
  <div id="top" class="top_tips">
    <div class="inner">
      <span class="text" v-for="item in items">
        {{item.text}}：<span>{{item.val}} {{item.unit}}</span>
      </span>
    </div> 
  </div>
</template>


<script>
import $ from 'jquery'
export default {
  data(){
    return {
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
    let _this=this
      // $('.top_tips .inner').append($('.top_tips .inner').html());
      let InnerW=0;
      $('.top_tips .inner .text').each(function(index,n){
          InnerW+=$(n).width()

      });
      $('.top_tips .inner').width(InnerW);
      function _move(){
        $('.top_tips .inner').stop().animate({
          marginLeft: -InnerW/_this.items.length
        },6000,"linear",function(){
          $('.top_tips .inner').css('margin-left',0);
          $('.top_tips .inner .text:first-child').appendTo($('.top_tips .inner'));
          _move();
        });
      }
      _move();
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
}
#top{
  width:100%;
  height: 100%;
  color:#f4e925;
  overflow: hidden
}
#top .text{
    width:15rem;
    white-space: nowrap;
    box-sizing: border-box;
    display: inline-block;
    font-size: .8rem;
  }
  #top .text>span{

  }
  #top .inner{
    text-align: left;

  }
</style>