import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CommonTable1 from '../views/CommonTable1.vue'
import CommonTable2 from '../views/CommonTable2.vue'
import CommonTable3 from '../views/CommonTable3.vue'
import CommonTable4 from '../views/CommonTable4.vue'
import CommonForm1 from '../views/CommonForm1.vue'
import CommonForm2 from '../views/CommonForm2.vue'
import Welcome from '../views/Welcome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home',
  },
  {
    path: '/home',
    name: 'home',
    component:Home,
    children:[
      {
        path: '/commonTable1',
        name: 'commonTable1',
        component: CommonTable1
      },
      {
        path: '/commonTable2',
        name: 'commonTable2',
        component: CommonTable2
      },
      {
        path: '/commonTable3',
        name: 'commonTable3',
        component: CommonTable3
      },
      {
        path: '/commonTable4',
        name: 'commonTable4',
        component: CommonTable4
      },
      {
        path: '/welcome',
        name: 'welcome',
        component: Welcome
      },
      {
        path: '/commonForm1',
        name: 'commonForm1',
        component: CommonForm1
      },
      {
        path: '/commonForm2',
        name: 'commonForm2',
        component: CommonForm2
      },
    ]
  },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
