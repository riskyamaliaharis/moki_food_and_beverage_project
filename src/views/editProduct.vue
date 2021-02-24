<template>
  <div>
    <Header />
    <b-container class="bv-example-row">
      <b-breadcrumb>
        <b-breadcrumb-item to="/product">Product</b-breadcrumb-item>
        <b-breadcrumb-item active>Edit Product</b-breadcrumb-item>
      </b-breadcrumb>
      <b-row>
        <b-col>
          <div class="picture">
            <div>
              <div v-if="!image">
                <img :src="`${url}${product.image_src}`" />
                <input
                  type="file"
                  @change="onFileChange($event)"
                  style="display:none"
                  class="hidden"
                  id="files"
                />
                <label class="uploadPicture" for="files"
                  >Select From Galery</label
                >
              </div>
              <div v-else>
                <img :src="image" />
                <b-button class="upload-btn" @click="removeImage"
                  >Remove Image</b-button
                >
              </div>
            </div>
          </div>
          <div class="delivery-time">
            <label class="label-title" for="">Start Delivery</label>
            <br />
            <b-form-timepicker
              type="time"
              :placeholder="product.delivery_start_hour"
              v-model="form.up_delivery_start_hour"
              class="form"
            ></b-form-timepicker>
            <br />
            <br />
            <label class="label-title" for="">End Delivery</label>
            <br />
            <b-form-timepicker
              type="time"
              :placeholder="product.delivery_end_hour"
              v-model="form.up_delivery_end_hour"
              class="form"
            ></b-form-timepicker>
          </div>

          <button
            class="gotopromo"
            type="button"
            block
            v-if="coupons.product_id !== product.product_id"
            @click="goToPromo(product.product_id)"
          >
            Add Promo
          </button>
          <button
            class="gotopromo"
            type="button"
            block
            v-else
            @click="goToEditPromo(product.product_id)"
          >
            Edit Promo
          </button>
        </b-col>

        <b-col class="right">
          <table class="table form">
            <tbody>
              <tr>
                <td>
                  <label class="label-title">Input Product Name</label>
                  <h1>
                    <input
                      type="text"
                      v-model="form.up_product_name"
                      :placeholder="product.product_name"
                    />
                  </h1>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="label-title">Input Product Price</label>
                  <h2>
                    IDR
                    <input
                      type="number"
                      v-model="form.up_product_price"
                      :placeholder="product.product_price"
                    />
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="label-title">Input Product Description</label>
                  <p class="description">
                    <b-form-input
                      v-model="form.up_product_description"
                      :placeholder="product.product_description"
                    ></b-form-input>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="label-title" for="">Discount</label>
                  <br />
                  <b-form-input
                    type="number"
                    v-model="form.up_discount_id"
                    :placeholder="product.discount_id"
                  ></b-form-input>
                  <br /><br />

                  <label class="label-title" for="">Product Category</label>
                  <div>
                    <b-dropdown id="dropdown-buttons" text="Category">
                      <b-dropdown-item-button @click="selectCategoryProduct(1)"
                        >Coffee</b-dropdown-item-button
                      >
                      <b-dropdown-item-button @click="selectCategoryProduct(2)"
                        >Non Coffee</b-dropdown-item-button
                      >
                      <b-dropdown-item-button @click="selectCategoryProduct(3)"
                        >Food</b-dropdown-item-button
                      >
                      <b-dropdown-item-button @click="selectCategoryProduct(4)"
                        >Add On</b-dropdown-item-button
                      >
                    </b-dropdown>
                  </div>
                  <br />
                  <label class="label-title"> Input Product Size</label>
                  <div class="product-size">
                    <b-form-checkbox
                      button-variant="warning"
                      v-model="size[0]"
                      name="check-button"
                      button
                      pill
                    >
                      <b>R</b>
                    </b-form-checkbox>

                    <b-form-checkbox
                      button-variant="warning"
                      v-model="size[1]"
                      name="check-button"
                      button
                      pill
                    >
                      <b>L</b>
                    </b-form-checkbox>
                    <b-form-checkbox
                      button-variant="warning"
                      v-model="size[2]"
                      name="check-button"
                      button
                      pill
                    >
                      <b>XL</b>
                    </b-form-checkbox>
                    <b-form-checkbox
                      v-model="size[3]"
                      class="food-size"
                      name="check-button"
                      button
                    >
                      <b>250gr</b>
                    </b-form-checkbox>
                    <b-form-checkbox
                      v-model="size[4]"
                      class="food-size"
                      name="check-button"
                      button
                    >
                      <b>300gr</b>
                    </b-form-checkbox>
                    <b-form-checkbox
                      v-model="size[5]"
                      class="food-size"
                      name="check-button"
                      button
                    >
                      <b>500gr</b>
                    </b-form-checkbox>
                  </div>
                  <br />
                  <label class="label-title"> Input Delivery Method</label>

                  <div class="deliv-method">
                    <b-form-checkbox
                      v-model="checked[0]"
                      class="delivery"
                      name="check-button"
                      button
                    >
                      <b>Dine In</b>
                    </b-form-checkbox>
                    <b-form-checkbox
                      v-model="checked[1]"
                      class="delivery"
                      name="check-button"
                      button
                    >
                      <b>Door Delivery</b>
                    </b-form-checkbox>
                    <b-form-checkbox
                      v-model="checked[2]"
                      class="delivery"
                      name="check-button"
                      button
                    >
                      <b>Pick Up</b>
                    </b-form-checkbox>
                  </div>
                  <div>
                    <label class="label-title" for="">Product Stock</label>
                    <br />
                    <b-form-input
                      type="number"
                      v-model="form.up_product_stock"
                      :placeholder="product.product_stock"
                    ></b-form-input>
                    <br /><br />
                  </div>
                  <b-row class="">
                    <button
                      class="save"
                      type="button"
                      block
                      variant="warning"
                      @click="patchProduct(product.product_id)"
                    >
                      Update Product
                    </button>
                  </b-row>
                </td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { mapActions, mapMutations, mapGetters } from 'vuex'
import { alert } from '../mixins/alert'
export default {
  mixins: [alert],
  data() {
    return {
      name: 'editProduct',
      components: {
        Header,
        Footer
      },
      form: {
        up_category_id: '',
        up_product_name: '',
        up_product_price: '',
        up_product_stock: '',
        up_image_src: '',
        up_product_description: '',
        up_delivery_method_id: '',
        up_size_id: '',
        up_delivery_start_hour: '',
        up_delivery_end_hour: '',
        up_discount_id: ''
      },
      counter: 0,
      checked: [false, false, false],
      image: false,
      size: [false, false, false, false, false, false],

      product_id: ''
    }
  },
  created() {
    this.product_id = this.$route.params.id
    this.getProductsByIdVuex(this.product_id)
    this.sizeNDelivButtonManipulation()
    this.getPromoByIdVuex(this.product_id)
  },

  computed: {
    ...mapGetters({
      category_id: 'getCategoryId',
      product_name: 'getProductName',
      product_price: 'getProductPrice',
      product_stock: 'getProductStock',
      image_src: 'getProductImg',
      product_description: 'getProductDesc',
      delivery_method_id: 'getProductDeliv',
      size_id: 'getProductSizeId',
      delivery_start_hour: 'getProductStart',
      delivery_end_hour: 'getProductEnd',
      discount_id: 'getProductDiscount',
      product: 'getDataProductUpdated',
      coupons: 'getOneCoupons'
    })
  },
  methods: {
    ...mapActions([
      'getProductsByIdVuex',
      'patchProductVuex',
      'getPromoByIdVuex'
    ]),
    ...mapMutations(['sendDatatoUpdated']),
    sizeNDelivButtonManipulation() {
      if (this.product.size_id === 1) {
        this.size = [true, false, false, false, false, false]
      } else if (this.product.size_id === 2) {
        this.size = [false, true, false, false, false, false]
      } else if (this.product.size_id === 3) {
        this.size = [false, false, true, false, false, false]
      } else if (this.product.size_id === 4) {
        this.size = [true, true, false, false, false, false]
      } else if (this.product.size_id === 5) {
        this.size = [true, false, true, false, false, false]
      } else if (this.product.size_id === 6) {
        this.size = [false, true, true, false, false, false]
      } else if (this.product.size_id === 7) {
        this.size = [false, false, false, true, false, false]
      } else if (this.product.size_id === 8) {
        this.size = [false, false, false, false, true, false]
      } else if (this.product.size_id === 9) {
        this.size = [false, false, false, false, false, true]
      } else if (this.product.size_id === 10) {
        this.size = [false, false, false, true, true, false]
      } else if (this.product.size_id === 11) {
        this.size = [false, false, false, true, false, true]
      } else if (this.product.size_id === 12) {
        this.size = [false, false, false, false, true, true]
      } else if (this.product.size_id === 13) {
        this.size = [true, true, true, false, false, false]
      } else if (this.product.size_id === 14) {
        this.size = [false, false, false, true, true, true]
      }

      if (this.product.delivery_method_id === 1) {
        this.checked = [true, false, false]
      } else if (this.product.delivery_method_id === 2) {
        this.checked = [false, true, false]
      } else if (this.product.delivery_method_id === 3) {
        this.checked = [false, false, true]
      } else if (this.product.delivery_method_id === 4) {
        this.checked = [true, true, false]
      } else if (this.product.delivery_method_id === 5) {
        this.checked = [true, false, true]
      } else if (this.product.delivery_method_id === 6) {
        this.checked = [false, true, true]
      } else if (this.product.delivery_method_id === 7) {
        this.checked = [true, true, true]
      }
    },
    selectCategoryProduct(params) {
      this.form.up_category_id = params
    },
    onFileChange(e) {
      this.form.up_image_src = e.target.files[0]
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage(file) {
      var reader = new FileReader()
      reader.onload = e => {
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function() {
      this.image = false
    },
    goToPromo(productid) {
      this.$router.push({ name: 'AddPromo', params: { id: productid } })
    },
    goToEditPromo(productid) {
      this.$router.push({ name: 'EditPromo', params: { id: productid } })
    },
    chooseSizeAndDelivMethod() {
      if (this.size[3] == true && this.size[4] == true && this.size[5] == true)
        this.form.up_size_id = 14
      else if (
        this.size[0] == true &&
        this.size[1] == true &&
        this.size[2] == true
      )
        this.form.up_size_id = 13
      else if (this.size[4] == true && this.size[5] == true)
        this.form.up_size_id = 12
      else if (this.size[3] == true && this.size[5] == true)
        this.form.up_size_id = 11
      else if (this.size[3] == true && this.size[4] == true)
        this.form.up_size_id = 10
      else if (this.size[5] == true) this.form.up_size_id = 9
      else if (this.size[4] == true) this.form.up_size_id = 8
      else if (this.size[3] == true) this.form.up_size_id = 7
      else if (this.size[1] == true && this.size[2] == true)
        this.form.up_size_id = 6
      else if (this.size[0] == true && this.size[2] == true)
        this.form.up_size_id = 5
      else if (this.size[0] == true && this.size[1] == true)
        this.form.up_size_id = 4
      else if (this.size[2] == true) this.form.up_size_id = 3
      else if (this.size[1] == true) this.form.up_size_id = 2
      else if (this.size[0] == true) this.form.up_size_id = 1

      if (
        this.checked[0] == true &&
        this.checked[1] == true &&
        this.checked[2] == true
      )
        this.form.up_delivery_method_id = 7
      else if (this.checked[1] == true && this.checked[2] == true)
        this.form.up_delivery_method_id = 6
      else if (this.checked[0] == true && this.checked[2] == true)
        this.form.up_delivery_method_id = 5
      else if (this.checked[0] == true && this.checked[1] == true)
        this.form.up_delivery_method_id = 4
      else if (this.checked[2] == true) this.form.up_delivery_method_id = 3
      else if (this.checked[1] == true) this.form.up_delivery_method_id = 2
      else if (this.checked[0] == true) this.form.up_delivery_method_id = 1
    },
    patchProduct(product_id) {
      this.chooseSizeAndDelivMethod()

      this.sendDatatoUpdated(this.form)

      this.patchProductVuex(product_id)
        .then(result => {
          this.successAlert(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
    }
  }
}
</script>

<style>
div.picture {
  text-align: center;
  border-radius: 10px;
  box-shadow: black;
  width: 80%;
  height: 600px;
  background-color: rgba(255, 186, 51, 1);
  padding-top: 30px;
}
.picture img {
  width: 400px;
  height: 500px;
  object-fit: cover;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  border-radius: 5px;
}

label.uploadPicture {
  width: 160px;
  height: 50px;
  padding-top: 12px;
  color: white;
  border-radius: 5px;
  background-color: rgba(106, 64, 41, 1);
}

.gotopromo {
  border-radius: 10px;
  background-color: rgba(106, 64, 41, 1);
  color: white;
}
div.product-size .food-size,
div.deliv-method .delivery {
  background-color: rgba(106, 64, 41, 1);
  margin-right: 5px;
  border-radius: 50%;
}
.center {
  text-align: center;
}
button {
  margin-right: 5px;
}
div.form,
table.form {
  width: 300px;
}
textarea {
  width: 80%;
}
input,
textarea {
  border: none;
}
.deliv-method {
  margin-bottom: 20px;
}
.product-size {
  margin-bottom: 20px;
}
.label-title,
h4 {
  color: rgba(106, 64, 41, 1);
  font-weight: 500;
}
.delivery-time {
  margin-top: 65px;
  margin-bottom: 45px;
}
.save {
  margin-top: 30px;
  width: 100%;
  border-radius: 10px;
  background-color: rgba(106, 64, 41, 1);
  color: white;
  margin-left: 15px;
  text-align: center;
  height: 50px;
}
div.category {
  width: 200px;
}
</style>
