<template>
  <div class="home">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Header />
    <br /><br /><br /><br /><br />
    <!-- <Sorting @sort="getProductSorting" :sort="sort" />
    <Navbar @category="handleCategory" /> -->

    <Sorting />
    <Navbar />

    <Coupon />
    <div>
      <b-button
        to="/editproduct"
        block
        variant="primary"
        class="toggle-add"
        v-if="role === 1"
        >Add New Product</b-button
      >
    </div>
    <div class="product-page">
      <div class="centered">
        <b-container class="bv-example-row">
          <b-row>
            <!-- START CARD -->
            <b-col
              class="card-mid "
              xl="3"
              lg="4"
              md="6"
              sm="6"
              xs="12"
              v-for="(item, index) in products"
              :key="index"
            >
              <div class="menu mx-auto">
                <img
                  class="rounded-circle"
                  :src="'http://localhost:3000/' + item.image_src"
                  alt="thumbnail"
                  style="width:100px"
                />
                <div class="p-title">
                  <p
                    class="poppins menu-title"
                    @click="detailProduct(item.product_id)"
                  >
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
import Sorting from '@/components/Sorting.vue'
import { mapActions, mapGetters, mapMutations } from 'vuex'
// import mapStates from 'vuex'

export default {
  name: 'Product',
  components: {
    Header,
    Footer,
    Navbar,
    Coupon,
    Sorting
  },
  computed: {
    ...mapGetters({
      products: 'getDataProduct',
      page: 'getPageProduct',
      limit: 'getLimitProduct',
      rows: 'getTotalRowsProduct',
      sort: 'getSortProduct',
      category_name: 'getCategoryNameProduct'
    })
    // rows() {
    //   return this.totalRows
    // }
  },
  data() {
    return {
      // products: [],
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
      // totalRows: null,
      // limit: 10,
      // page: 1,
      // category_name: '',
      // sort: '',
      role: 1
    }
  },
  created() {
    this.getProducts()
  },
  methods: {
    ...mapActions(['getProducts', 'getProductsByCategory']),
    ...mapMutations(['changePage', 'changeCategory']),

    getProductSorting(sort) {
      console.log('before ' + sort)
      this.changeSort(sort)
      console.log('after ' + sort)
      this.getProducts()
    },
    // getProduct(sort) {
    // axios
    //   .get(
    //     `http://localhost:3000/product?page=${this.page}&limit=${this.limit}&sort=${sort}`
    //   )
    //   .then(response => {
    //     console.log(response)
    //     this.sort = sort
    //     this.totalRows = response.data.pagination.totalData
    //     this.products = response.data.data
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // },

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
        .delete(`http://localhost:3000/product/${product_id}`)
        .then(response => {
          console.log(response)
          this.getProduct(this.sort)
        })
        .catch(error => {
          console.log(error)
        })
    },
    handlePageChange(numberPage) {
      console.log(numberPage)
      // console.log(numberPage)
      // this.page = numberPage
      this.changePage(numberPage)
      this.getProducts()
    },
    detailProduct(product_id) {
      console.log(product_id)
      this.$router.push({ name: 'detailProduct', params: { id: product_id } })
    },
    handleCategory(category_name) {
      this.changeCategory(category_name)
      console.log('after click category ' + this.category_name)
      this.getProductsByCategory()
    }
    // getProductByCategory(category_name) {
    //   console.log(category_name + this.sort)
    //   axios
    //     .get(
    //       `http://localhost:3000/product/category?page=${this.page}&limit=${this.limit}&category_name=${category_name}`
    //     )
    //     .then(response => {
    //       if (
    //         category_name !== 'coffee' &&
    //         category_name !== 'noncoffee' &&
    //         category_name !== 'food' &&
    //         category_name !== 'addon'
    //       ) {
    //         this.category_name = ''
    //         this.products = this.getProduct(this.sort)
    //       } else {
    //         this.category_name = category_name
    //         this.products = response.data.data
    //       }

    //       this.totalRows = response.data.pagination.totalData

    //       console.log(this.products)
    //     })
    //     .catch(error => {
    //       console.log(error)
    //     })
    // }
    //   sortingProduct(sort) {
    //     console.log(sort)
    //     axios
    //       .get(
    //         `http://localhost:3000/product/sorting?page=${this.page}&limit=${this.limit}&sort=${sort}`
    //       )
    //       .then(response => {
    //         if (
    //           sort !== 'product_name ASC' &&
    //           sort !== 'product_name DESC' &&
    //           sort !== 'product_price ASC' &&
    //           sort !== 'product_price DESC' &&
    //           sort !== 'product_cretaed_at ASC' &&
    //           sort !== 'product_created_at DESC'
    //         ) {
    //           console.log('yayayay')
    //           this.sort = ''
    //           this.products = this.getProduct()
    //         } else {
    //           console.log('husdjs')
    //           this.sort = sort
    //           console.log(response)
    //           this.products = response.data.data
    //           this.totalRows = response.data.pagination.totalData
    //         }
    //         console.log(this.products)
    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    //   }
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
  cursor: pointer;
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
