import axios from 'axios'
export default {
  state: {
    form: {
      coupon_code: '',
      start_coupon: '',
      end_coupon: '',
      coupon_discount: '',
      product_id: '',
      promo_size: '',
      promo_deliv_method: '',
      promo_description: ''
    },
    productPromo: '',
    cards: [],
    coupons: '',
    promos: ''
  },
  mutations: {
    setProductThisIdPromo(state, payload) {
      state.productPromo = payload
      state.form.product_id = payload.product_id
    },
    inputForm2ToStore(state, payload) {
      state.form.coupon_discount = payload.promoCouponDiscount
      state.form.promo_size = payload.promoSize
      state.form.promo_deliv_method = payload.promoDelivMethod
      state.form.promo_description = payload.promoDescription
    },
    changeForm1(state, payload) {
      state.form.coupon_code = payload.promoCouponCode
      state.form.start_coupon = payload.promoStartCoupon
      state.form.end_coupon = payload.promoEndCoupon
    },
    setPromoAfterGetPromo(state, payload) {
      state.cards = payload
    },
    setPromoByIdAfterGetPromo(state, payload) {
      state.coupons = payload
    },
    setPromoByIdProduct(state, payload) {
      state.promos = payload
    }
  },
  actions: {
    getProductsByIdVuexPromo(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://${process.env.VUE_APP_ROOT_URL}/product/selectproduct/${payload}`
          )
          .then(response => {
            context.commit('setProductThisIdPromo', response.data.data[0])
            resolve(response)
          })
          .catch(error => {
            alert(error.response.data.msg)
            reject(error)
          })
      })
    },
    postPromoVuex(context) {
      return new Promise((resolve, reject) => {
        axios
          .post(
            `http://${process.env.VUE_APP_ROOT_URL}/promo`,
            context.state.form
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },

    getPromosVuex(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_ROOT_URL}/promo`)
          .then(response => {
            context.commit('setPromoAfterGetPromo', response.data.data)
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    getPromoByIdVuex(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_ROOT_URL}/promo/${payload}`)
          .then(response => {
            context.commit('setPromoByIdAfterGetPromo', response.data.data[0])
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getPromoJoinProductVuex(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(
            `http://${process.env.VUE_APP_ROOT_URL}/promo/product/${payload}`
          )
          .then(response => {
            context.commit('setPromoByIdProduct', response.data.data[0])
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    updatePromo(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(
            `http://${process.env.VUE_APP_ROOT_URL}/promo/${payload.id}`,
            payload.data
          )
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    delPromo(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`http://${process.env.VUE_APP_ROOT_URL}/promo/${payload}`)
          .then(response => {
            context.dispatch('getPromosVuex')
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  },

  getters: {
    getDataProductUpdatedPromo(state) {
      return state.productPromo
    },
    getDataCouponCodePromo(state) {
      return state.form.coupon_code
    },
    getDataStartCouponPromo(state) {
      return state.form.start_coupon
    },
    getDataEndCouponPromo(state) {
      return state.form.end_coupon
    },
    getDataCouponDiscountPromo(state) {
      return state.form.coupon_discount
    },
    getDataSizePromo(state) {
      return state.form.promo_size
    },
    getDataDelivMethodPromo(state) {
      return state.form.promo_deliv_method
    },
    getDataDescriptionPromo(state) {
      return state.form.promo_description
    },
    getProductIdPromo(state) {
      return state.form.product_id
    },
    getAllCoupons(state) {
      return state.cards
    },
    getOneCoupons(state) {
      return state.coupons
    },
    getproductPromo(state) {
      return state.promos
    }
  }
}

// this.$router.push({ name: 'detailProduct', params: { id: product_id } })
