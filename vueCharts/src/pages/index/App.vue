<template>
  <div id="app">
    <layout></layout>
  </div>
</template>


<script>
import Layout from '../../components/Layout'

export default {
  name: 'app',
  components: {
    Layout
  }
}
</script>

<style>
html,body{
  height: 100%;
}
body{
  padding: 0;
  margin: 0;
  background-color: #404a59;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
