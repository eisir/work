// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import filters from '../../utils/filter';
import fetch from 'whatwg-fetch'

import storeConfig from '../../store/index'


Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));


Vue.use(Vuex);
const store = new Vuex.Store(storeConfig)


/* eslint-disable no-new */
new Vue({
  store,
  ...App
}).$mount('#app')
