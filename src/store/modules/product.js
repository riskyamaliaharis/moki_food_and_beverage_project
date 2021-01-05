import axios from 'axios'

export default {
  state: {
    limit: 2,
    page: 1,
    products: [],
    sort: '',
    totalRows: null
  },
  mutations: {
    setProduct(state, payload) {
      //   payload =response.data
      state.products = payload.data
      state.totalRows = payload.pagination.totalData
    },
    changePage(state, payload) {
      state.page = payload
    }
  },
  actions: {
    getProducts(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://localhost:3000/product?page=${context.state.page}&limit=${context.state.limit}&sort=${context.state.sort}`
          )
          .then(response => {
            console.log(response)
            context.commit('setProduct', response.data)
            resolve(response)
            // context.state.sort = sort
            // context.state.totalRows = response.data.pagination.totalData
            // context.state.products = response.data.data
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
    }
  }
}
