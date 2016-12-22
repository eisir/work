// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import filters from '../../utils/filter';
import fetch from 'whatwg-fetch'



Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
