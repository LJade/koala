import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/login/login.vue'
import Home from '../views/home/home.vue'
import Create from '../views/create/create.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login'
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/home',
      name:'home',
      component:Home
    },
    {
      path:'/create',
      name:'create',
      component:Create
    }
  ]
})
