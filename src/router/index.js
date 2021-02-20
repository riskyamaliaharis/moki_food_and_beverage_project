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
import AdminHistory from '../views/HistoryAdmin.vue'
import Login from '../views/auth/Login.vue'
import SignUp from '../views/auth/SignUp.vue'
import AddPromo from '../views/Promo/AddPromo.vue'
import EditPromo from '../views/Promo/EditPromo.vue'
import ForgotPassword from '../views/auth/ForgotPassword.vue'
import Verify from '../views/auth/Verify.vue'
import PaymentReceipt from '../views/print/PrintReceipt.vue'
import Dashboard from '../views/DashboardShow.vue'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin/dashadmin',
    name: 'Dashboard',
    component: Dashboard,
    meta: { requiresAdmin: true }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: Product,
    meta: { requiresAuth: true }
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
    component: editProduct,
    meta: { requiresAdmin: true }
  },
  {
    path: '/createproduct',
    name: 'CreateProduct',
    component: CreateProduct,
    meta: { requiresAdmin: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
    meta: { requiresCustomer: true }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: { requiresCustomer: true }
  },
  {
    path: '/admin/history',
    name: 'AdminHistory',
    component: AdminHistory,
    meta: { requiresAdmin: true }
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: { requiresVisitor: true }
  },
  {
    path: '/promo/addpromo',
    name: 'AddPromo',
    component: AddPromo,
    meta: { requiresAdmin: true }
  },
  {
    path: '/promo/editpromo',
    name: 'EditPromo',
    component: EditPromo,
    meta: { requiresAdmin: true }
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: Profile,
    meta: { requiresAuth: true }
  },
  {
    path: '/forgot/:keys',
    name: 'Forgot',
    component: ForgotPassword,
    meta: { requiresVisitor: true }
  },
  {
    path: '/verify/:keys',
    name: 'Verification',
    component: Verify,
    meta: { requiresVisitor: true }
  },
  {
    path: '/cart/myreceipt',
    name: 'PaymentReceipt',
    component: PaymentReceipt,
    meta: { requiresCostumer: true }
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
  } else if (to.matched.some(record => record.meta.requiresAdmin)) {
    if (store.getters.isAdmin) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else if (to.matched.some(record => record.meta.requiresCustomer)) {
    if (store.getters.isCustomer) {
      next()
    } else {
      next({
        path: '/'
      })
    }
  } else next()
})

export default router
