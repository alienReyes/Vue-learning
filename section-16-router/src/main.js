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
// sete the poistion to navigate to a hash
// this how we can go to an #id
    if (to.hash){
      return{selector:to.hash}
    }
     return{x:0,y:0}
  }
})
// execute this before following the route
router.beforeEach((to, from,next)=>{
  console.log('Global beforeEach');
  // if we don't have nex() it won't follow the route
  // we can pass nothing, false or a route object and create a redirect
  next();

})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
