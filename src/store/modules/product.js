import axios from 'axios'

export default {
  state: {
    limit: 8,
    page: 1,
    products: [],
    cart: [],
    sort: '',
    totalRows: null,
    category_name: '',
    search: '',
    total_price: 0
  },
  mutations: {
    setProduct(state, payload) {
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    setDataAfterClickCategory(state, payload) {
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    changePage(state, payload) {
      state.page = payload
    },
    changeSort(state, payload) {
      state.sort = payload
    },
    changeCategory(state, payload) {
      state.category_name = payload
    },
    newSearch(state, payload) {
      state.search = payload
    },
    setProductAfterInputSearch(state, payload) {
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    addItemToCart(state, payload) {
      const addedItem = state.cart.find(
        product => product.product_id === payload.product_id
      )
      const index = state.cart.findIndex(
        product => product.product_id === payload.product_id
      )
      if (addedItem) {
        console.log(state.cart)
        state.cart[index] = payload
      } else {
        state.cart.push({ ...payload, qty: 1 })
      }
      let subpay = 0
      for (let i = 0; i <= state.cart.length - 1; i++) {
        for (let j = 0; j <= state.cart[i].mycarts.length - 1; j++) {
          subpay = subpay + state.cart[i].mycarts[j].total
        }
      }
      console.log('subpay' + subpay)
      state.total_price = subpay
    }
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://${process.env.VUE_APP_ROOT_URL}/product?page=${context.state.page}&limit=${context.state.limit}&sort=${context.state.sort}`
          )
          .then(response => {
            context.commit('setProduct', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getProductsByCategory(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://${process.env.VUE_APP_ROOT_URL}/product/category?page=${context.state.page}&limit=${context.state.limit}&category_name=${context.state.category_name}`
          )
          .then(response => {
            if (
              context.state.category_name !== 'coffee' &&
              context.state.category_name !== 'noncoffee' &&
              context.state.category_name !== 'food' &&
              context.state.category_name !== 'addon'
            ) {
              context.state.category_name = ''
              context.dispatch('getProducts')
            } else {
              context.commit('setDataAfterClickCategory', response.data)
            }

            resolve(response)
          })
          .catch(error => {
            console.log(error.response)
            reject(error)
          })
      })
    },
    getProductsSearching(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://${process.env.VUE_APP_ROOT_URL}/product/searching?page=${context.state.page}&limit=${context.state.limit}&search=${context.state.search}`
          )
          .then(response => {
            context.commit('setProductAfterInputSearch', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    addToCart(context, payload) {
      context.commit('addItemToCart', payload)
    },
    deleteProducts(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://${process.env.VUE_APP_ROOT_URL}/product/${payload}`)
          .then(response => {
            console.log(context.limit)
            alert(response.data.msg)
            context.dispatch('getProducts')
            resolve(response)
          })
          .catch(error => {
            alert('Failed to delete this product ' + error.response.data.msg)
            reject(error)
          })
      })
    }
  },
  getters: {
    getPageProduct(state) {
      return state.page
    },
    getLimitProduct(state) {
      return state.limit
    },
    getDataProduct(state) {
      return state.products
    },
    getTotalRowsProduct(state) {
      return state.totalRows
    },
    getSortProduct(state) {
      return state.sort
    },
    getCategoryNameProduct(state) {
      return state.category_name
    },
    getSearchProduct(state) {
      return state.search
    },
    getCart(state) {
      return state.cart
    },
    totalPrice(state) {
      return state.total_price
    }
  }
}
