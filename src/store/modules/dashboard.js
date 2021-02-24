import axios from 'axios'
export default {
  state: {
    chartMo: [],
    chartWeek: [],
    infoToday: '',
    infoYear: '',
    infoWeek: ''
  },
  mutations: {
    setChartMo(state, payload) {
      state.chartMo = payload
    },
    setChartWeek(state, payload) {
      state.chartWeek = payload
    },
    setInfoToday(state, payload) {
      state.infoToday = payload
    },
    setInfoYear(state, payload) {
      state.infoYear = payload
    },
    setInfoWeek(state, payload) {
      state.infoWeek = payload
    }
  },
  actions: {
    chartWeekVuex(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_ROOT_URL_MOKI}order/chart/revenueperday`)
          .then(response => {
            context.commit('setChartWeek', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    chartMoVuex(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `${process.env.VUE_APP_ROOT_URL_MOKI}order/chart/revenuepermonth`
          )
          .then(response => {
            context.commit('setChartMo', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    infoTodayVuex(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_ROOT_URL_MOKI}order/data/todaysincome`)
          .then(response => {
            context.commit('setInfoToday', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    infoYearVuex(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_ROOT_URL_MOKI}order/data/yearsincome`)
          .then(response => {
            context.commit('setInfoYear', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    infoWeekVuex(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.VUE_APP_ROOT_URL_MOKI}order/data/totalorder`)
          .then(response => {
            context.commit('setInfoWeek', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    }
  },
  getters: {
    setDataChartMo(state) {
      return state.chartMo
    },
    setDataChartWeek(state) {
      return state.chartWeek
    },
    setDataInfoToday(state) {
      return state.infoToday
    },
    setDataInfoYear(state) {
      return state.infoYear
    },
    setDataInfoWeek(state) {
      return state.infoWeek
    }
  }
}
