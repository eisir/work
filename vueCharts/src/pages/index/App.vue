<template>
  <div id="app" :class="theme">
    <layout></layout>
  </div>
</template>


<script>
import Layout from '../../components/Layout'

export default {
  data(){
    return {
      theme:''
    }
  },
  name: 'app',
  components: {
    Layout
  },
  mounted(){
    this.theme=this.$store.state.themeClass[this.$store.state.theme]
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/base.scss'
</style>