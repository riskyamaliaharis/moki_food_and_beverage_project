import axios from 'axios'
export default {
  state: {
    getHistories: [],
    getAllHistories: []
  },
  mutations: {
    setHistories(state, payload) {
      state.getHistories = payload.data
    },
    setAllHistories(state, payload) {
      state.getAllHistories = payload.data
    }
  },
  actions: {
    getHistoriesVuex(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://${process.env.VUE_APP_ROOT_URL}/order/history/${payload}`
          )
          .then(response => {
            context.commit('setHistories', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    delHistory(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://${process.env.VUE_APP_ROOT_URL}/order/${payload}`)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getAllHistoriesVuex(context) {
      return new Promise((resolve, reject) => {
        axios
          .get('http://${process.env.VUE_APP_ROOT_URL}/order/data/history/all')
          .then(response => {
            context.commit('setAllHistories', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    setMyHistories(state) {
      return state.getHistories
    },
    setAllHistories(state) {
      return state.getAllHistories
    }
  }
}
