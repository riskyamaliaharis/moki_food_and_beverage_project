import axios from 'axios'
export default {
  state: {
    profile: {}
  },
  mutations: {
    setProfiles(state, payload) {
      state.profile = payload
    }
  },
  actions: {
    getProfileVuex(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_ROOT_URL_MOKI}user/profile/${payload}`)
          .then(result => {
            context.commit('setProfiles', result.data.data[0])
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },

    patchProfileVuex(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `${process.env.VUE_APP_ROOT_URL_MOKI}user/update/${payload.id}`,
            payload.data
          )
          .then(result => {
            resolve(result)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    myProfile(state) {
      return state.profile
    }
  }
}
