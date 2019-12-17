import Vue from 'vue'
import App from './App.vue'
// This creates a  Global filter
Vue.filter('to-lowercase', value=> value.toLowerCase())

new Vue({
  el: '#app',
  render: h => h(App)
})
