<template>
  <div id="app">
    <other-layout></other-layout>
  </div>
</template>


<script>
import OtherLayout from '../../components/otherLayout'

export default {
  name: 'app',
  components: {
    OtherLayout
  }
}
</script>

<style lang="scss">
@import '../../assets/scss/base.scss';
</style>
