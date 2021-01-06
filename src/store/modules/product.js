import axios from 'axios'

export default {
  state: {
    limit: 2,
    page: 1,
    products: [],
    sort: '',
    totalRows: null,
    category_name: ''
  },
  mutations: {
    setProduct(state, payload) {
      //   payload =response.data
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
      console.log('payload ' + payload)
      state.sort = payload
    },
    changeCategory(state, payload) {
      state.category_name = payload
    }
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        // context.state.sort = payload
        axios
          .get(
            `http://localhost:3000/product?page=${context.state.page}&limit=${context.state.limit}&sort=${context.state.sort}`
          )
          .then(response => {
            context.commit('setProduct', response.data)
            resolve(response)
            // context.state.sort = sort
            // context.state.totalRows = response.data.pagination.totalData
            // context.state.products = response.data.data
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
            `http://localhost:3000/product/category?page=${context.state.page}&limit=${context.state.limit}&category_name=${context.state.category_name}`
          )
          .then(response => {
            if (
              context.state.category_name !== 'coffee' &&
              context.state.category_name !== 'noncoffee' &&
              context.state.category_name !== 'food' &&
              context.state.category_name !== 'addon'
            ) {
              context.state.category_name = ''
              context.state.products = context.state.getProducts()
            } else {
              // this.category_name = category_name
              context.commit('setDataAfterClickCategory', response.data)
              // this.products = response.data.data
              // this.totalRows = response.data.pagination.totalData
            }

            console.log(this.products)
            resolve(response)
          })
          .catch(error => {
            console.log(error.response)
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
    }
  }
}
