<template>
  <div class="home">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Header />

    <div class="product-page">
      <div class="centered">
        <b-container class="bv-example-row">
          <b-row>
            <b-col
              class="card-mid"
              xl="3"
              lg="4"
              md="6"
              sm="12"
              v-for="(item, index) in products"
              :key="index"
            >
              <b-card
                v-bind:title="item.product_name"
                img-src="https://picsum.photos/600/300/?image=25"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 10rem;"
                class="mb-2"
                rounded="circle"
              >
                <b-card-text> Rp. {{ item.product_price }} </b-card-text>

                <b-button
                  type="button"
                  class="btn a rounded-circle act"
                  variant="danger"
                  @click="deleteProduct(item.product_id)"
                >
                  <i class="fa fa-trash "></i>
                </b-button>
                <b-button type="button" class="btn a rounded-circle act">
                  <i class="fa fa-edit "></i>
                </b-button>
                <!-- <b-button variant="primary">Add To Cart</b-button>
                <b-button variant="success">Update</b-button>
                <b-button
                  variant="danger"
                  @click="deleteProduct(item.product_id)"
                  >Delete</b-button
                > -->
              </b-card>
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
            <b-button block variant="primary">Add New Product</b-button>
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

export default {
  name: 'Home',
  components: {
    Header,
    Footer
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
      page: 1
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
    },
    handlePageChange(numberPage) {
      console.log(numberPage)
      this.page = numberPage
      this.getProduct()
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

button.act {
  background-color: rgba(255, 186, 51, 1);
  border-color: none;
  margin-right: 5px;
}

.card-mid {
  align-items: center;
}
</style>
