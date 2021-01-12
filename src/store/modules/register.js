import axios from 'axios'

export default {
  state: {
    form: {
      user_name: '',
      email: '',
      password: '',
      first_name: '',
      last_name: '',
      mobile: '',
      gender: '',
      address: '',
      member_card_status: ''
    },
    users: ''
  },
  mutations: {
    // setNewUser(state, payload) {
    //   state.users = payload
    //   console.log(state.users)
    // },
    setDataUserRegister(state, payload) {
      state.form.user_name = payload.user_name
      state.form.password = payload.password
      state.form.email = payload.user_name
    }
  },
  actions: {
    registerVuex(context) {
      return new Promise((resolve, reject) => {
        axios
          .post(`http://localhost:3000/user/register`, context.state.form)
          .then(result => {
            context.commit('setNewUser', result.data.data)
            resolve(result)
          })
          .catch(error => {
            console.log(error)
            reject(error)
          })
      })
    }
  },
  getters: {
    setNewUser(state) {
      return state.users
    },
    setNewUserName(state) {
      return state.form.user_name
    },
    setNewEmail(state) {
      return state.form.email
    },
    setNewPassword(state) {
      return state.form.password
    }
  }
}
