<template>
  <div>
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
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      products: 'getDataProduct',
      page: 'getPageProduct',
      limit: 'getLimitProduct',
      rows: 'getTotalRowsProduct',
      sort: 'getSortProduct',
      category_name: 'getCategoryNameProduct'
    })
  },
  created() {
    this.getProducts()
  },
  data() {
    return {
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
      role: ''
    }
  },
  methods: {
    ...mapActions(['getProducts', 'getProductsByCategory']),
    ...mapMutations(['changePage', 'changeCategory']),

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
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}
.product-page {
  margin: 100px auto;
  min-height: 400px;
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
