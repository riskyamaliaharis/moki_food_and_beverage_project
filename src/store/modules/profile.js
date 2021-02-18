import axios from 'axios'
export default {
  state: {
    profile: {}
  },
  mutations: {
    setProfiles(state, payload) {
      state.profile = payload
      console.log(state.profile)
    }
  },
  actions: {
    getProfileVuex(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_ROOT_URL}/user/profile/${payload}`)
          .then(result => {
            console.log(result)
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
            `http://${process.env.VUE_APP_ROOT_URL}/user/update/${payload.id}`,
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
