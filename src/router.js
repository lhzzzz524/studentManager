import Vue from 'vue'
import Router from 'vue-router'
import AddStu from './views/AddStu'
import StuList from './views/StuList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'exa_active',
  routes: [
    {
      path: '/',
      redirect: '/stuList'
    },
    {
      path: '/stuList',
      name: 'stuList',
      component: StuList
    },
    {
      path: '/addStu',
      name: 'addStu',
      component: AddStu
    }
  ]
})
