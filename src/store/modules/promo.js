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
    coupons: ''
  },
  mutations: {
    setProductThisIdPromo(state, payload) {
      state.productPromo = payload
      state.form.product_id = payload.product_id
      console.log('id di store ' + state.form.product_id)
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
      console.log(state.cards)
    },
    setPromoByIdAfterGetPromo(state, payload) {
      state.coupons = payload
    }
  },
  actions: {
    getProductsByIdVuexPromo(context, payload) {
      return new Promise((resolve, reject) => {
        console.log('Get Data Id process ... ')
        console.log('payload ' + payload)
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
        console.log('masuk post promo')
        axios
          .post(
            `http://${process.env.VUE_APP_ROOT_URL}/promo`,
            context.state.form
          )
          .then(response => {
            alert(response.data.msg)
            resolve(response)
          })
          .catch(error => {
            alert('Failed to post new promo ' + error.response.data.msg)
            reject(error.response)
          })
      })
    },

    getPromosVuex(context) {
      return new Promise((resolve, reject) => {
        axios
          .get(`http://${process.env.VUE_APP_ROOT_URL}/promo`)
          .then(response => {
            console.log(response.data.data)
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
    }
  }
}

// this.$router.push({ name: 'detailProduct', params: { id: product_id } })
