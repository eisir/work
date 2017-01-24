<template>
  <header>
      <div class="item">
        <h3>进件量</h3>
        <div class="count"><!-- {{topData.loan_001}} -->
          <span v-for="(item,index) in loan_001">
            <transition-group name="list-complete" tag="span">
              <span v-bind:key="item" class="list-complete-item" :class="'list-complete-item-'+index">{{ item }}</span>
            </transition-group>
          </span>
        </div>
      </div>
      <div class="item">
        <h3>审批量</h3>
        <div class="count">
          <span v-for="(item,index) in loan_002">
            <transition-group name="list-complete" tag="span">
              <span v-bind:key="item" class="list-complete-item" :class="'list-complete-item-'+index">{{ item }}</span>
            </transition-group>
          </span>
        </div>
      </div>
      <div class="item">
        <h3>申请金额 <span>(元)</span></h3>
        <div class="count">
          <span v-for="(item,index) in loan_003">
            <transition-group name="list-complete" tag="span">
              <span v-bind:key="item" class="list-complete-item" :class="'list-complete-item-'+index">{{ item }}</span>
            </transition-group>
          </span>
        </div>
      </div>
      <div class="item">
        <h3>贷款金额 <span>(元)</span></h3>
        <div class="count">
          <span v-for="(item,index) in loan_004">
            <transition-group name="list-complete" tag="span">
              <span v-bind:key="item" class="list-complete-item" :class="'list-complete-item-'+index">{{ item }}</span>
            </transition-group>
          </span>
        </div>
      </div>
      <div class="item">
        <h3>理财笔数</h3>
        <div class="count">
          <span v-for="(item,index) in lfp_005">
            <transition-group name="list-complete" tag="span">
              <span v-bind:key="item" class="list-complete-item" :class="'list-complete-item-'+index">{{ item }}</span>
            </transition-group>
          </span>
        </div>
      </div>
      <div class="item">
        <h3>理财总金额 <span>(元)</span></h3>
        <div class="count">
          <span v-for="(item,index) in lfp_006">
            <transition-group name="list-complete" tag="span">
              <span v-bind:key="item" class="list-complete-item" :class="'list-complete-item-'+index">{{ item }}</span>
            </transition-group>
          </span>
        </div>
      </div>      
    </header>
</template>
<script>
import 'lodash'
  export default{
    data(){
      return {
        topData:{
          loan_001:'',
          loan_002:'',
          loan_003:'',
          loan_004:'',
          lfp_005:'',
          lfp_006:''
        },
      }
    },
    mounted(){
      
      // let _this=this;
      // setInterval(function(){
        
      //   let res = [].concat(_this.topData)
      //   let n=Math.floor(Math.random()*6)
        
      //   res[n] = res[n]+Math.floor(Math.random()*10)
      //   _this.topData=res

      // }, 2000);
    },
    computed:{ 
      lists(){
        return this.$store.state.HeadData
      },
      /*
        动画数据
         */
      loan_001(){        
        return this.topData.loan_001.toString().split("")
      },
      loan_002(){        
        return this.topData.loan_002.toString().split("")
      },
      loan_003(){        
        return this.topData.loan_003.toString().split("")
      },
      loan_004(){        
        return this.topData.loan_004.toString().split("")
      },
      lfp_005(){        
        return this.topData.lfp_005.toString().split("")
      },
      lfp_006(){        
        return this.topData.lfp_006.toString().split("")
      }
    },
    watch:{
      lists:function(val){
        if(val){
          this.topData=val
        }
      }
    }
  }
</script>

<style scoped>
.count>span{
  position: relative;
  display: inline-block;
}
.list-complete-item{
  display: inline-block;
  /*margin-right: 10px;*/
}
.list-complete-item-0{  
  transition: all 1.2s;
}
.list-complete-item-1{  
  transition: all 1.1s;
}
.list-complete-item-2{  
  transition: all 1s;
}
.list-complete-item-3{  
  transition: all .9s;
}
.list-complete-item-4{  
  transition: all .8s;
}
.list-complete-item-5{  
  transition: all .7s;
}
.list-complete-item-6{  
  transition: all .65s;
}
.list-complete-item-7{  
  transition: all .6s;
}
.list-complete-item-8{  
  transition: all .58s;
}
.list-complete-item-9{  
  transition: all .57s;
}
.list-complete-item-10{  
  transition: all .56s;
}
.list-complete-item-11{  
  transition: all .55s;
}
.list-complete-item-12{  
  transition: all .54s;
}
.list-complete-item-13{  
  transition: all .53s;
}
.list-complete-item-14{  
  transition: all .52s;
}
.list-complete-item-15{  
  transition: all .51s;
}
.list-complete-enter{
  opacity: 0;
  transform: translateY(20px);
}
.list-complete-leave-to{
  opacity: 0;
  transform: translateY(-20px);
}
.list-complete-leave-active{
  position: absolute;
  transform: translateY(-20px);
  opacity: 0;
}
</style>