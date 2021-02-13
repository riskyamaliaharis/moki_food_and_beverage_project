import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
require('dotenv').config()
import Product from '../views/Product.vue'
import detailProduct from '../views/detailProduct.vue'
import editProduct from '../views/editProduct.vue'
import CreateProduct from '../views/product/AddProduct.vue'
import Cart from '../views/Cart.vue'
import Profile from '../views/user/Profile.vue'
import History from '../views/History.vue'
import Login from '../views/auth/Login.vue'
import SignUp from '../views/auth/SignUp.vue'
import AddPromo from '../views/Promo/AddPromo.vue'
import EditPromo from '../views/Promo/EditPromo.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
// import Dashboard from '../views/Dashboard.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // meta: { requiresAuth: true }
  },
  {
    path: '/about',
    name: 'About',
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
    path: '/editproduct/:id',
    name: 'editProduct',
    component: editProduct
  },
  {
    path: '/createproduct',
    name: 'CreateProduct',
    component: CreateProduct
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
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/promo/addpromo',
    name: 'AddPromo',
    component: AddPromo
  },
  {
    path: '/promo/editpromo',
    name: 'EditPromo',
    component: EditPromo
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: ForgotPassword
  }
  // {
  //   path: '/admin/dashboard',
  //   name: 'Dashboard',
  //   component: Dashboard
  // }
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
