import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Product from './modules/product'
import Promo from './modules/promo'
import PostProduct from './modules/postproduct'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { Auth, Product, PostProduct, Promo },
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
