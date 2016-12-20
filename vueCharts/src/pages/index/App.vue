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
html{
  font-size: 20px;
  font-family: "Microsoft YaHei","微软雅黑",宋体,Arial,Tahoma,Helvetica,sans-serif;
}
html,body{
  height: 100%;
}
body{
  padding: 0;
  margin: 0;
  background-color: #404a59;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  padding-top: 56.25%;
  position: relative;
}
</style>
