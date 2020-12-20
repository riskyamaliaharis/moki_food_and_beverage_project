import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'

import detailProduct from '../views/detailProduct.vue'
import editProduct from '../views/editProduct.vue'

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
    component: () => import('../views/About.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/detailproduct/:id',
    name: 'detailProduct',
    component: detailProduct
  },
  {
    path: '/editproduct',
    name: 'editProduct',
    component: editProduct
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
