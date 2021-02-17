import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Register from './modules/register'
import Product from './modules/product'
import Promo from './modules/promo'
import PostProduct from './modules/postproduct'
import History from './modules/historyorder'
import Dash from './modules/dashboard'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Product, PostProduct, Promo, Register, History, Dash },
  state: {
    name: 'Risky Amalia Haris'
  },
  mutations: {},
  actions: {},
  getters: {},
  plugins: [
    createPersistedState({
      paths: ['Auth.user']
    })
  ]
})
