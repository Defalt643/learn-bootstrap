import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/formInput1',
    name: 'Form Input 1',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormInput1.vue')
  },
  {
    path: '/formInput2',
    name: 'Form Input 2',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormInput2.vue')
  },
  {
    path: '/formInput3',
    name: 'Form Input 3',
    component: () => import(/* webpackChunkName: "about" */ '../views/FormInput3.vue')
  },
  {
    path: '/form1',
    name: 'Form1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form1.vue')
  },
  {
    path: '/form2',
    name: 'Form2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form2.vue')
  },
  {
    path: '/form3',
    name: 'Form3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Form3.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
