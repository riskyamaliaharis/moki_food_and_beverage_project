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
                  v-b-modal="modalId(index)"
                  v-if="user_role === 1"
                >
                  <b-modal :id="'modal' + index" hide-footer>
                    <h1 class="text-center">Delete Coupon</h1>
                    <h6 class="my-4 text-center">
                      Are you sure you want to delete this item?
                    </h6>
                    <b-row align-h="end">
                      <b-col cols="3"
                        ><b-button
                          variant="primary"
                          block
                          @click="$bvModal.hide('modal' + index)"
                          >No</b-button
                        ></b-col
                      >
                      <b-col cols="3"
                        ><b-button
                          @click="deleteProduct(item.product_id)"
                          variant="danger"
                          block
                          >Yes</b-button
                        ></b-col
                      >
                    </b-row>
                  </b-modal>
                  <i class="fa fa-trash "></i>
                </b-button>
                <b-button
                  type="button"
                  class="btn a rounded-circle act"
                  @click="patchProduct(item.product_id)"
                  v-if="user_role === 1"
                >
                  <i class="fa fa-edit "></i>
                </b-button>
                <!-- END CARD-->
              </div>
            </b-col>
          </b-row>
          <div class="centered pagination">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="limit"
              aria-controls="my-table"
              @change="handlePageChange"
            ></b-pagination>
          </div>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import { alert } from '../../mixins/alert'
export default {
  mixins: [alert],
  computed: {
    ...mapGetters({
      products: 'getDataProduct',
      page: 'getPageProduct',
      limit: 'getLimitProduct',
      rows: 'getTotalRowsProduct',
      sort: 'getSortProduct',
      category_name: 'getCategoryNameProduct',
      search: 'getSearchProduct'
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
      user_role: 1
    }
  },
  methods: {
    ...mapActions(['getProducts', 'getProductsByCategory', 'deleteProducts']),
    ...mapMutations(['changePage']),

    setProduct(data) {
      this.form = data
      this.product_id = data.product_id
    },
    patchProduct(product_id) {
      this.$router.push({ name: 'editProduct', params: { id: product_id } })
    },
    deleteProduct(product_id) {
      this.deleteProducts(product_id)
        .then(result => {
          this.successAlert(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
      this.getProducts()
    },
    handlePageChange(numberPage) {
      this.changePage(numberPage)
      this.getProducts()
    },
    detailProduct(product_id) {
      console.log(product_id)
      this.$router.push({ name: 'detailProduct', params: { id: product_id } })
    },
    modalId(index) {
      return 'modal' + index
    }
  }
}
</script>

<style scoped>
.centered {
  text-align: center;
}
.pagination {
  margin: 20px auto 0;
}
.product-page {
  margin: 100px auto;
  min-height: 200px;
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
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.toggle-add {
  background-color: rgba(106, 64, 41, 1);
  width: 60%;
  margin: auto;
  position: absolute;
  left: 270px;
}
.toggle-add:hover {
  background-color: white;
  color: rgba(106, 64, 41, 1);
  border-color: white;
}
</style>
