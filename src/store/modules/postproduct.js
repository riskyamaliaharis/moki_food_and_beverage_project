import axios from 'axios'

export default {
  state: {
    form: {
      category_id: '',
      product_name: '',
      product_price: '',
      product_stock: '',
      image_src: '',
      product_description: '',
      delivery_method_id: '',
      size_id: '',
      delivery_start_hour: '',
      delivery_end_hour: '',
      discount_id: ''
    },
    product: ''
  },
  mutations: {
    changeRightData(state, payload) {
      console.log(payload)
      state.form.product_name = payload.name
      state.form.product_price = payload.price
      state.form.product_description = payload.description
      state.form.category_id = payload.category
      state.form.delivery_method_id = payload.delivMethod
      state.form.size_id = payload.sizeId
    },
    changeLeftData(state, payload) {
      console.log(payload)
      state.form.delivery_start_hour = payload.delivStartHour
      state.form.delivery_end_hour = payload.delivEndHour
      state.form.discount_id = payload.discountId
      state.form.product_stock = payload.stock
    },
    changeImage(state, payload) {
      state.form.image_src = payload
    },
    setProductThisId(state, payload) {
      state.product = payload
      console.log('state.product')
      console.log(state.product)
    },
    sendDatatoUpdated(state, payload) {
      state.form.category_id = payload.up_category_id
      state.form.product_name = payload.up_product_name
      state.form.product_price = payload.up_product_price
      state.form.product_stock = payload.up_product_stock
      state.form.image_src = payload.up_image_src
      state.form.product_description = payload.up_product_description
      state.form.delivery_method_id = payload.up_delivery_method_id
      state.form.size_id = payload.up_size_id
      state.form.delivery_start_hour = payload.up_delivery_start_hour
      state.form.delivery_end_hour = payload.up_delivery_end_hour
      state.form.discount_id = payload.up_discount_id
    }
  },
  actions: {
    postProductsVuex(context) {
      return new Promise((resolve, reject) => {
        console.log('masuk')
        const {
          product_name,
          category_id,
          product_price,
          product_stock,
          image_src,
          product_description,
          delivery_method_id,
          size_id,
          delivery_start_hour,
          delivery_end_hour,
          discount_id
        } = context.state.form
        console.log('product_name ' + product_name)
        const data = new FormData()
        data.append('product_name', product_name)
        data.append('category_id', category_id)
        data.append('product_price', product_price)
        data.append('product_stock', product_stock)
        data.append('image_src', image_src)
        data.append('product_description', product_description)
        data.append('delivery_method_id', delivery_method_id)
        data.append('size_id', size_id)
        data.append('delivery_start_hour', delivery_start_hour)
        data.append('delivery_end_hour', delivery_end_hour)
        data.append('discount_id', discount_id)
        for (var pair of data.entries()) {
          console.log(pair[0] + ', ' + pair[1])
        }
        axios
          .post(`http://${process.env.VUE_APP_ROOT_URL}/product`, data)
          .then(response => {
            resolve(response)
          })
          .catch(error => {
            reject(error.response)
          })
      })
    },
    getProductsByIdVuex(context, payload) {
      return new Promise((resolve, reject) => {
        console.log('Get Data Id process ... ')
        console.log('payload ' + payload)
        axios
          .get(
            `http://${process.env.VUE_APP_ROOT_URL}/product/selectproduct/${payload}`
          )
          .then(response => {
            console.log(response.data.data[0].product_name)
            context.commit('setProductThisId', response.data.data[0])
            resolve(response)
          })
          .catch(error => {
            alert(error.response.data.msg)
            reject(error)
          })
      })
    },
    patchProductVuex(context, payload) {
      return new Promise((resolve, reject) => {
        console.log('patch proces ... ' + payload)
        console.log(context.state.product.product_id)
        let {
          product_name,
          category_id,
          product_price,
          product_stock,
          image_src,
          product_description,
          delivery_method_id,
          size_id,
          delivery_start_hour,
          delivery_end_hour,
          discount_id
        } = context.state.form
        console.log('context.state.form')
        console.log(context.state.form)
        let dataUpdate = new FormData()
        dataUpdate.append('product_name', product_name)
        dataUpdate.append('category_id', category_id)
        dataUpdate.append('product_price', product_price)
        dataUpdate.append('product_stock', product_stock)
        dataUpdate.append('image_src', image_src)
        dataUpdate.append('product_description', product_description)
        dataUpdate.append('delivery_method_id', delivery_method_id)
        dataUpdate.append('size_id', size_id)
        dataUpdate.append('delivery_start_hour', delivery_start_hour)
        dataUpdate.append('delivery_end_hour', delivery_end_hour)
        dataUpdate.append('discount_id', discount_id)
        for (var pair of dataUpdate.entries()) {
          console.log(pair[0] + ', ' + pair[1])
        }
        axios
          .patch(
            `http://${process.env.VUE_APP_ROOT_URL}/product/${payload}`,
            dataUpdate
          )
          .then(response => {
            alert(response.data.msg)
            console.log(response)
            resolve(response)
          })
          .catch(error => {
            console.log(error.response.data.msg)
            reject(error.response)
          })
      })
    }
  },
  getters: {
    getCategoryId(state) {
      return state.form.category_id
    },
    getProductName(state) {
      return state.form.product_name
    },
    getProductPrice(state) {
      return state.form.product_price
    },
    getProductStock(state) {
      return state.form.product_stock
    },
    getProductImg(state) {
      return state.form.image_src
    },
    getProductDesc(state) {
      return state.form.product_description
    },
    getProductDeliv(state) {
      return state.form.delivery_method_id
    },
    getProductStart(state) {
      return state.form.delivery_start_hour
    },
    getProductSizeId(state) {
      return state.form.size_id
    },
    getProductEnd(state) {
      return state.form.delivery_end_hour
    },
    getDataProductUpdated(state) {
      return state.product
    },
    getProductDiscount(state) {
      return state.discount_id
    }
  }
}
