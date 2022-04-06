import Vue from 'vue'
import Router from 'vue-router'
import AddStu from './views/AddStu'
import StuList from './views/StuList'
import About from './views/About'
import Chart from './views/Chart'
import Edit from './views/Edit'
import Del from './views/Del'
import Find from "./views/Find"


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
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/chart',
      name: 'chart',
      component: Chart
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit
    }, {
      path: '/del',
      name: 'del',
      component: Del
    },
    {
      path: '/find',
      name: 'find',
      component: Find
    },
  ]
})
