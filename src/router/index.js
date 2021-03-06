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
  },
  {
    path: '/datatable1',
    name: 'Data Table 1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/DataTable1.vue')
  },
  {
    path: '/productform1',
    name: 'Product Form 1',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductForm1.vue')
  },
  {
    path: '/producttable',
    name: 'Product Table',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/product/ProductTable.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
