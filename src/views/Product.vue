<template>
  <div class="home">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Header />
    <Navbar @category="getProductByCategory(category_name)" />
    <Coupon />
    <div class="product-page">
      <div class="centered">
        <b-container class="bv-example-row">
          <b-row>
            <!-- START CARD -->
            <b-col
              class="card-mid"
              xl="3"
              lg="4"
              md="6"
              sm="12"
              v-for="(item, index) in products"
              :key="index"
            >
              <div class="menu">
                <img
                  class="rounded-circle"
                  src="../assets/img/twitter_logo.png"
                  alt="thumbnail"
                  style="width:100px"
                />
                <div class="p-title">
                  <p class="poppins menu-title">
                    <strong>{{ item.product_name }}</strong>
                  </p>
                </div>

                <p class="price">Rp. {{ item.product_price }}</p>
                <b-button
                  type="button"
                  class="btn a rounded-circle act"
                  variant="danger"
                  @click="deleteProduct(item.product_id)"
                  v-if="role === 1"
                >
                  <i class="fa fa-trash "></i>
                </b-button>
                <b-button
                  type="button"
                  class="btn a rounded-circle act"
                  v-if="role === 1"
                >
                  <i class="fa fa-edit "></i>
                </b-button>
                <!-- END CARD-->
              </div>
            </b-col>
          </b-row>
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="limit"
            aria-controls="my-table"
            @change="handlePageChange"
          ></b-pagination>
          <div>
            <b-button
              block
              variant="primary"
              class="toggle-add"
              v-if="role === 1"
              >Add New Product</b-button
            >
          </div>
        </b-container>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import axios from 'axios'
import Navbar from '@/components/Navbar.vue'
import Coupon from '@/components/Coupon.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Navbar,
    Coupon
  },
  computed: {
    rows() {
      return this.totalRows
    }
  },
  data() {
    return {
      products: [],
      form: {
        category_id: '',
        product_name: '',
        product_price: '',
        product_stock: '',
        image_src: '',
        product_description: '',
        payment_method_id: '',
        delivery_method_id: '',
        size_id: '',
        discount_id: ''
      },
      alert: false,
      isMsg: '',
      product_id: '',
      currentPage: 1,
      totalRows: null,
      limit: 10,
      page: 1,
      category_name: '',
      role: 2
    }
  },
  created() {
    this.getProduct()
  },
  methods: {
    getProduct() {
      axios
        .get(
          `http://localhost:3000/product?page=${this.page}&limit=${this.limit}`
        )
        .then(response => {
          console.log(response)
          this.totalRows = response.data.pagination.totalData
          this.products = response.data.data
        })
        .catch(error => {
          console.log(error)
        })
    },
    postProduct() {
      console.log(this.form)
      axios
        .post('http://localhost:3000/product', this.form)
        .then(response => {
          console.log(response)
          this.totalRows = response.data.pagination.totalData
          this.alert = true
          this.isMsg = response.data.msg
          this.getProduct()
        })
        .catch(error => {
          console.log(error.response)
        })
    },
    setProduct(data) {
      console.log(data)
      this.form = data
      this.product_id = data.product_id
    },
    patchProduct() {
      console.log(this.product_id)
      console.log(this.form)
    },
    deleteProduct(product_id) {
      console.log(product_id)
      axios
        .delete(`http://localhost:3000/product/${this.product_id}`)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error)
        })
    },
    handlePageChange(numberPage) {
      console.log(numberPage)
      this.page = numberPage
      this.getProduct()
    },
    getProductByCategory(category_name) {
      console.log(category_name)
      axios
        .get(
          `http://localhost:3000/product/category?page=${this.page}&limit=${this.limit}&category_name=${category_name}`
        )
        .then(response => {
          if (
            category_name !== 'coffee' &&
            category_name !== 'noncoffee' &&
            category_name !== 'food'
          ) {
            this.category_name = ''
            this.products = this.getProduct()
          } else {
            this.category_name = category_name
            this.products = response.data.data
          }

          this.totalRows = response.data.pagination.totalData

          console.log(this.products)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}
.product-page {
  margin: 100px auto;
  min-height: 700px;
}
b-button {
  width: 60%;
}

.p-title {
  height: 170px;
}

button.act {
  background-color: rgba(255, 186, 51, 1);
  border-color: none;
  margin-right: 5px;
}

.card-mid {
  text-align: center;
}

.menu {
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 40px;
  text-align: center;
  border-radius: 20px;
  position: relative;
  width: 150px;
  height: 270px;
  box-shadow: 0 0 5px 5px #928b8b;
  padding-bottom: 0;
  vertical-align: bottom;
}
.menu p {
  line-height: 101.34%;
}

.menu-title {
  padding-top: 80px;
  font-weight: 900;
  font-size: 22px;
  margin-bottom: 10px;
}

.menu img {
  position: absolute;
  margin: 0 auto;
  top: -30px;
  left: 24px;
}
.toggle-add {
  background-color: rgba(106, 64, 41, 1);
  width: 60%;
  margin: auto;
}
.toggle-add:hover {
  background-color: white;
  color: rgba(106, 64, 41, 1);
  border-color: white;
}
</style>
