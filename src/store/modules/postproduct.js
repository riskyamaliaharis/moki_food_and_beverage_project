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
    isMsg: ''
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
      state.form.discount_id = payload.discount
      state.form.product_stock = payload.stock
    },
    changeImage(state, payload) {
      state.form.image_src = payload
    }
  },
  actions: {
    postProductsVuex(context) {
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
        .post('http://localhost:3000/product', data)
        .then(response => {
          context.state.isMsg = response.data.msg
          alert(context.state.isMsg)
        })
        .catch(error => {
          console.log(error.response)
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
    getProductDisc(state) {
      return state.form.discount_id
    }
  }
}
