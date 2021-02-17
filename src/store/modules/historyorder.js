import axios from 'axios'
export default {
  state: {
    getHistories: []
  },
  mutations: {
    setHistories(state, payload) {
      console.log(payload)
      state.getHistories = payload.data
      console.log(state.getHistories)
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
    }
  },
  getters: {
    setMyHistories(state) {
      return state.getHistories
    }
  }
}
