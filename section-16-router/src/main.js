import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import {routes} from './routes.js'

// routes should be register on the root instance, we do this on the 
// routes.js file, history mode is the correct
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode:'history',
  // this controls the scroll
  scrollBehavior(to, from, savedPosition){
    if (savedPosition){
      return savedPosition
    }

    if (to.hash){
      return{selector:to.hash}
    }
     return{x:0,y:0}
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
