import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
require('dotenv').config()
import Product from '../views/Product.vue'
import detailProduct from '../views/detailProduct.vue'
import editProduct from '../views/editProduct.vue'
import Cart from '../views/Cart.vue'
import History from '../views/History.vue'
import Login from '../views/auth/Login.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
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
    component: detailProduct,
    meta: { requiresAuth: true }
  },
  {
    path: '/editproduct',
    name: 'editProduct',
    component: editProduct
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    // meta: { requiresVisitor: true }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/history',
    name: 'History',
    component: History
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  } else next()
})

export default router
