<template>
  <div class="top_tips">
    <div class="inner">
      <span class="text" v-for="item in oitems">
        {{item.text}}：{{item.val}}
      </span>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
  export default{
    data(){
      return {
        items:[
          {
            text:'APP用户数',
            val:8809
          },
          {
            text:'新增APP用户数',
            val:8809
          },
          {
            text:'信贷进件量',
            val:8809
          },
          {
            text:'信贷贷款金额',
            val:8809
          },
          {
            text:'理财-活期笔数',
            val:8810
          },
          {
            text:'理财-活期金额',
            val:8809
          },
          {
            text:'理财-定期笔数',
            val:8809
          },
          {
            text:'理财-定期金额',
            val:8809
          },
          {
            text:'便民交易笔数',
            val:8809
          },
          {
            text:'便民交易总金额',
            val:8809
          }
        ]
      }
    },
    mounted(){
      $('.top_tips .inner').append($('.top_tips .inner').html());
      let InnerW=0;
      $('.top_tips .inner .text').each(function(index,n){
          InnerW+=$(n).width()+40

      });
      $('.top_tips .inner').width(InnerW)
      function _move(){
        $('.top_tips').animate({
          scrollLeft: InnerW/2
        },InnerW*5,"linear",function(){
          $('.top_tips').scrollLeft(0);
          _move()
        })
      }
      _move();
    },
    computed:{
      oitems:function(){
        let res=this.items
        return res.concat(res)
      }
    }
    
  }
</script>

<style scoped>
  .top_tips{
    position: absolute;
    left: 10%;
    width: 80%;
    top: 2.4%;
    margin-top: -1rem;
    line-height: 2rem;
    height: 2rem;
    color:#f4e925;
    font-size: 1rem;
    overflow: hidden;
  }
  .top_tips .text{
    margin-right: 40px;
    box-sizing: border-box;
    display: inline-block;
  }
  .top_tips .inner{
    text-align: left;

  }
</style>