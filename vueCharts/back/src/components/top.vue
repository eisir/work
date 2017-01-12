<template>
  <div class="top_tips">
    <div class="inner">
      <span class="text" v-for="item in items">
        {{item.text}}：<span>{{item.val}} {{item.unit}}</span>
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
          // {
          //   text:'APP用户数',
          //   val:0,
          //   unit:''
          // },
          // {
          //   text:'新增APP用户数',
          //   val:0,
          //   unit:''
          // },
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
          }
          // {
          //   text:'便民交易笔数',
          //   val:0,
          //   unit:''
          // },
          // {
          //   text:'便民交易总金额',
          //   val:0,
          //   unit:'元'
          // }
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
            marginLeft: -$('.top_tips .inner .text').eq(0).width()
          },6000,"linear",function(){
            $('.top_tips .inner').css('margin-left',0);
            $('.top_tips .inner .text:first-child').appendTo($('.top_tips .inner'));
            _move();
          });
      }
      _move();
    },
    computed:{
      oitems:function(){
          return this.items.filter(function(n){
            return n.val!=0
          })
      },
      getData:function(){
        return this.$store.state.TopData
      }
    },
    watch:{
      getData(vals){
        // this.items[0].val=vals.lmps_002
        // this.items[1].val=vals.lmps_001
        // this.items[2].val=vals.loan_001
        // this.items[3].val=vals.loan_004
        // this.items[4].val=vals.lfp_003
        // this.items[5].val=vals.lfp_004
        // this.items[6].val=vals.lfp_001
        // this.items[7].val=vals.lfp_002
        // this.items[8].val=vals.lmps_003
        // this.items[9].val=vals.lmps_004

        // this.items[0].val=vals.lmps_002
        // this.items[1].val=vals.lmps_001
        this.items[0].val=vals.loan_001
        this.items[1].val=vals.loan_004
        this.items[2].val=vals.lfp_003
        this.items[3].val=vals.lfp_004
        this.items[4].val=vals.lfp_001
        this.items[5].val=vals.lfp_002
        // this.items[8].val=vals.lmps_003
        // this.items[9].val=vals.lmps_004
      }
    }
    
  }
</script>

<style scoped>
  iframe{
    border: none;
    overflow: hidden;
  }
</style>