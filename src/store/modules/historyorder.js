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
          .get(`${process.env.VUE_APP_ROOT_URL_MOKI}order/history/${payload}`)
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
          .patch(`${process.env.VUE_APP_ROOT_URL_MOKI}order/delete/${payload}`)
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
          .get(`${process.env.VUE_APP_ROOT_URL_MOKI}order/data/history/all`)
          .then(response => {
            context.commit('setAllHistories', response.data)
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    patchStatus(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_ROOT_URL_MOKI}order/${payload}`)
          .then(response => {
            context.dispatch('getAllHistoriesVuex')
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
