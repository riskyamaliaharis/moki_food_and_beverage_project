<template>
  <div>
    <Header />
    <b-container class="bv-example-row">
      <b-breadcrumb>
        <b-breadcrumb-item to="/product">Product</b-breadcrumb-item>
        <b-breadcrumb-item active>Add New Product</b-breadcrumb-item>
      </b-breadcrumb>
      <b-row>
        <b-col>
          <!-- Plain mode -->
          <div class="picture">
            <!-- <div class="upload" v-for="item in items" :key="item">
              <div v-if="!item.image">
                <h4>Select product image</h4>
                <input type="file" @change="onFileChange(item, $event)" />
              </div>
              <div v-else>
                <img :src="item.image" />
                <button @click="removeImage(item)">Remove image</button>
              </div> -->

            <!-- </div> -->
            <div class="upload">
              <div v-if="!image_src">
                <h4>Select product image</h4>
                <input type="file" @change="handleFile" />
              </div>
              <div v-else>
                <img :src="'http://localhost:3000/' + image_src" />
                <button @click="removeImage(image_src)">Remove image</button>
              </div>
            </div>
            <!-- <h4>Select product image</h4>
            <input type="file" @change="handleFile" />
            <img :src="'http://localhost/:3000/' + image_src" /> -->
            <Picture />
          </div>
          <div class="delivery-time">
            <label class="label-title" for="">Start Delivery</label>
            <br />
            <b-form-timepicker
              type="time"
              placeholder="HH:mm:ss"
              v-model="form.delivery_start_hour"
              class="form"
            ></b-form-timepicker>
            <br />
            <br />
            <label class="label-title" for="">End Delivery</label>
            <br />
            <b-form-timepicker
              type="time"
              placeholder="HH:mm:ss"
              v-model="form.delivery_end_hour"
              class="form"
            ></b-form-timepicker>
          </div>
          <div>
            <label class="label-title" for="">Product Stock</label>
            <br />
            <input type="number" v-model="form.product_stock" />
            <br /><br />
          </div>
          <div>
            <label class="label-title" for="">Product Category</label>
            <br />
            <input
              class="cat"
              type="number"
              placeholder="(1)Coffee (2)Non-Coffee (3)Food (4)Add-On"
              v-model="form.category_id"
            />
          </div>
        </b-col>

        <b-col class="right">
          <table class="table form">
            <tbody>
              <tr>
                <td>
                  <label class="label-title">Input Product Name</label>
                  <h1><input type="text" v-model="form.product_name" /></h1>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="label-title">Input Product Price</label>
                  <h2>
                    IDR <input type="number" v-model="form.product_price" />
                  </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <label class="label-title">Input Product Description</label>
                  <p class="description">
                    <textarea v-model="form.product_description"></textarea>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
          <label class="label-title"> Input Product Size</label>
          <div class="product-size">
            <!-- (Checked: {{ checked3 }}) -->
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
            <b-form-checkbox v-model="size[3]" name="check-button" button>
              <b>250gr</b>
            </b-form-checkbox>
            <b-form-checkbox v-model="size[4]" name="check-button" button>
              <b>300gr</b>
            </b-form-checkbox>
            <b-form-checkbox v-model="size[5]" name="check-button" button>
              <b>500gr</b>
            </b-form-checkbox>
          </div>
          <br />
          <label class="label-title"> Input Delivery Method</label>

          <div class="deliv-method">
            <!-- (Checked: {{ checked3 }}) -->

            <b-form-checkbox v-model="checked[0]" name="check-button" button>
              <b>(Dine In: {{ checked[0] }})</b>
            </b-form-checkbox>
            <b-form-checkbox v-model="checked[1]" name="check-button" button>
              <b>Door Delivery</b>
            </b-form-checkbox>
            <b-form-checkbox v-model="checked[2]" name="check-button" button>
              <b>Pick Up</b>
            </b-form-checkbox>
          </div>
          <b-row class="">
            <button
              class="save"
              type="button"
              block
              variant="warning"
              @click="postProduct()"
            >
              Add Product
            </button>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Picture from '@/components/Picture.vue'
// import axios from 'axios'
export default {
  data() {
    return {
      name: 'editProduct',
      components: {
        Header,
        Footer,
        Picture
      },
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
        discount_id: 1
      },
      counter: 0,
      checked: [false, false, false],
      items: [
        {
          image: false
        }
      ],
      size: [false, false, false, false, false, false]
    }
  },
  // created() {
  //   this.postProduct()
  // },
  updated() {},
  methods: {
    increase: function() {
      this.counter++
    },
    decrease: function() {
      if (this.counter > 0) {
        this.counter--
      } else {
        this.counter = 0
      }
    },
    reset: function() {
      this.counter = 0
    },
    // onFileChange(item, e) {
    //   this.form.image_src = e.target.files[0].name
    //   console.log(this.form.image_src)
    //   var files = e.target.files || e.dataTransfer.files
    //   console.log(files)
    //   if (!files.length) return
    //   this.createImage(item, files[0])
    // },
    // createImage(item, file) {
    //   // var image = new Image();
    //   var reader = new FileReader()
    //   reader.onload = e => {
    //     item.image = e.target.result
    //   }
    //   reader.readAsDataURL(file)
    // },
    // removeImage: function(item) {
    //   item.image = false
    // },
    handleFile(event) {
      this.form.image_src = event.target.files[0]
    },
    chooseSizeAndDelivMethod() {
      console.log(this.size)
      if (this.size[3] == true && this.size[4] == true && this.size[5] == true)
        this.form.size_id = 14
      else if (
        this.size[0] == true &&
        this.size[1] == true &&
        this.size[2] == true
      )
        this.form.size_id = 13
      else if (this.size[4] == true && this.size[5] == true)
        this.form.size_id = 12
      else if (this.size[3] == true && this.size[5] == true)
        this.form.size_id = 11
      else if (this.size[3] == true && this.size[4] == true)
        this.form.size_id = 10
      else if (this.size[5] == true) this.form.size_id = 9
      else if (this.size[4] == true) this.form.size_id = 8
      else if (this.size[3] == true) this.form.size_id = 7
      else if (this.size[1] == true && this.size[2] == true)
        this.form.size_id = 6
      else if (this.size[0] == true && this.size[2] == true)
        this.form.size_id = 5
      else if (this.size[0] == true && this.size[1] == true)
        this.form.size_id = 4
      else if (this.size[2] == true) this.form.size_id = 3
      else if (this.size[1] == true) this.form.size_id = 2
      else if (this.size[0] == true) this.form.size_id = 1
      else console.log('choice is not available')
      console.log('size ' + this.form.size_id)
      if (
        this.checked[0] == true &&
        this.checked[1] == true &&
        this.checked[2] == true
      )
        this.delivery_method_id = 7
      else if (this.checked[1] == true && this.checked[2] == true)
        this.form.delivery_method_id = 6
      else if (this.checked[0] == true && this.checked[2] == true)
        this.form.delivery_method_id = 5
      else if (this.checked[0] == true && this.checked[1] == true)
        this.delivery_method_id = 4
      else if (this.checked[2] == true) this.form.delivery_method_id = 3
      else if (this.checked[1] == true) this.form.delivery_method_id = 2
      else if (this.checked[0] == true) this.form.delivery_method_id = 1
      else console.log('choice is not available')
      console.log(this.form.delivery_method_id)
    },
    postProduct() {
      this.chooseSizeAndDelivMethod()
      console.log(this.form)
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
      } = this.form
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

      // axios
      //   .post('http://localhost:3000/product', this.form)
      //   .then(response => {
      //     console.log(response)
      //     // this.totalRows = response.data.pagination.totalData
      //     this.alert = true
      //     this.isMsg = response.data.msg
      //     // this.getProduct()
      //   })
      //   .catch(error => {
      //     console.log(error.response)
      //   })
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
  height: 400px;
  background-color: rgba(255, 186, 51, 1);
  padding-top: 80px;
}
.picture img {
  width: 50%;
  margin: auto;
  display: block;
  margin-bottom: 10px;
  border-radius: 50%;
}
.vue-counter {
  border-color: grey;
}
.vue-counter button {
  border-color: white;
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
b-form-checkbox {
  background-color: rgba(106, 64, 41, 1);
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
  margin-top: 100px;
  width: 50%;
  border-radius: 5px;
  background-color: rgba(106, 64, 41, 1);
  color: white;
  margin-right: 100px;
  text-align: center;
}
.cat {
  width: 300px;
}
</style>
