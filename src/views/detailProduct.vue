<template>
  <b-container fluid class="main-set bv-example-row">
    <Header />
    <b-breadcrumb class="breadcrumb">
      <b-breadcrumb-item to="/product">Product</b-breadcrumb-item>
      <b-breadcrumb-item active>{{ product.product_name }}</b-breadcrumb-item>
    </b-breadcrumb>
    <b-container class="detail-page">
      <!-- START FIRST ROW -->
      <b-row>
        <!-- START FIRST COLUMN -->
        <b-col>
          <section>
            <img
              class="img-set rounded-circle"
              :src="`http://${url}/${product.image_src}`"
              alt="coldbrew"
            />
            <h2 class="poppins">
              <strong>{{ product.product_name }}</strong>
            </h2>
            <h3>IDR {{ product.product_price }}</h3>
            <br />

            <div class="button-set">
              <button
                type="button"
                @click="addToMyCart"
                class="btn btn-1 rounded btn-md btn-block"
              >
                Add to Cart
              </button>
              <button
                type="button"
                class="btn btn-2 rounded btn-md btn-block"
                v-if="role === 0"
              >
                Ask a Staff
              </button>
              <button
                type="button"
                class="btn btn-2 rounded btn-md btn-block"
                v-if="coupons.product_id === product.product_id"
                @click="applyCoupon"
              >
                APPLY COUPON
              </button>
            </div>
          </section>
        </b-col>
        <!-- END FIRST COLUMN -->

        <!-- START SECOND COLUMN -->
        <b-col>
          <div class="card-coldbrew2">
            <p>
              Delivery only on <b>Monday to Friday</b> at
              <b>{{ product.delivery_start_hour }}</b> until
              <b>{{ product.delivery_end_hour }}</b>
            </p>
            <p>
              {{ product.product_description }}
            </p>
            <h5>Choose a Size</h5>
            <div class="d-flex justify-content-around">
              <button
                type="button"
                class="btn btn-sm rounded-circle"
                :disabled="product.R == 1 ? false : true"
                @click="goSize(1)"
              >
                R
              </button>
              <button
                type="button"
                class="btn btn-sm rounded-circle"
                :disabled="product.L == 1 ? false : true"
                @click="goSize(1.3)"
              >
                L
              </button>
              <button
                type="button"
                class="btn btn-sm rounded-circle"
                :disabled="product.XL == 1 ? false : true"
                @click="goSize(1.5)"
              >
                XL
              </button>
            </div>
            <div class="d-flex justify-content-around food-size">
              <button
                type="button"
                class="btn btn-sm rounded-circle"
                :disabled="product.gram250 == 1 ? false : true"
                @click="goSize(1.02)"
              >
                250
              </button>
              <button
                type="button"
                class="btn btn-sm rounded-circle"
                :disabled="product.gram300 == 1 ? false : true"
                @click="goSize(1.4)"
              >
                300
              </button>
              <button
                type="button"
                class="btn btn-sm rounded-circle"
                :disabled="product.gram500 == 1 ? false : true"
                @click="goSize(2)"
              >
                500
              </button>
            </div>
          </div>
          <div class="card-coldbrew3 mt-5">
            <h6>Choose Delivery and Time</h6>
            <button
              type="button"
              class="btn "
              :disabled="product.dine_in == 1 ? false : true"
              @click="goDelivMethod('dine_in')"
            >
              Dine In
            </button>
            <button
              type="button"
              class="btn "
              :disabled="product.door_delivery == 1 ? false : true"
              @click="goDelivMethod('door_delivery')"
            >
              Door Delivery
            </button>
            <button
              type="button"
              class="btn "
              :disabled="product.pick_up == 1 ? false : true"
              @click="goDelivMethod('pick_up')"
            >
              Pick Up
            </button>
          </div>
          <div class="input-group input-group-sm mb-3 mt-3 set-time">
            <span class="input-group-text left-time">Set time :</span>

            <input
              type="time"
              class="form-control right-time"
              placeholder="Enter the time you’ll arrived"
            />
          </div>
        </b-col>
        <!-- END SECOND COLUMN -->
      </b-row>
      <!-- END FIRST ROW -->

      <!-- START SECOND ROW -->
      <b-row>
        <!-- START FIRST COLUMN -->
        <b-col lg="6" md="12">
          <div
            class="card-coldbrew4 d-inline-flex flex-row align-items-center justify-content-around flex-wrap"
          >
            <div class="p-2">
              <img
                class="img-coldbrew rounded-circle "
                :src="`http://${url}/${product.image_src}`"
                alt="coldbrew"
              />
            </div>
            <div class="p-1 text-coldbrew ">
              <h6><strong>COLD BREW</strong></h6>
              <p>x {{ value }} {{ save.sizeName }}</p>
            </div>
            <div class="p-2 counter-coldbrew d-flex justify-content-around">
              <button
                id="sub"
                type="button"
                class="btn btn-sm rounded-circle"
                @click="sub"
              >
                -
              </button>

              <span>{{ value }}</span>
              <button
                id="add"
                type="button"
                class="btn btn-sm rounded-circle"
                @click="add"
              >
                +
              </button>
            </div>
          </div>
        </b-col>
        <!-- END FIRST COLUMN -->

        <!-- START SECOND COLUMN -->
        <b-col lg="6" md="12">
          <div class="card-coldbrew5 poppins">
            <input type="button" class="btn" value="CHECKOUT" />
          </div>
        </b-col>
        <!-- END SECOND COLUMN -->
      </b-row>
      <AddToCart />
      <!-- END SECOND ROW -->
    </b-container>
    <Footer />
  </b-container>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import AddToCart from '@/components/cart/AddToCart.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    Header,
    Footer,
    AddToCart
  },
  data() {
    return {
      url: process.env.VUE_APP_ROOT_URL,
      product_id: '',
      role: 1,
      value: 0,
      myCarts: [],
      save: {
        m: 0,
        qty: 0,
        sizeName: '',
        total: 0
      },
      getPromoSale: 0
    }
  },
  created() {
    this.product_id = this.$route.params.id
    this.getProductsByIdVuex(this.product_id)
    this.getPromoByIdVuex(this.product_id)
  },
  computed: {
    ...mapGetters({
      product: 'getDataProductUpdated',
      coupons: 'getOneCoupons'
    })
  },
  methods: {
    ...mapActions(['getProductsByIdVuex', 'addToCart', 'getPromoByIdVuex']),
    add() {
      this.value = parseInt(this.value) + 1
      this.goSize(this.save.m)
    },
    sub() {
      if (this.value <= 0) {
        this.value = 0
      } else {
        this.value = parseInt(this.value) - 1
      }
      this.goSize(this.save.m)
    },
    addToMyCart() {
      const merged = { ...this.product, mycarts: this.myCarts }
      console.log(merged)
      this.addToCart(merged)
      this.$bvToast.toast(`Check It By Click "GO TO MY CART"`, {
        title: 'Your Order has been added to your cart',
        variant: 'warning',
        solid: true
      })
    },
    goSize(n) {
      this.save.m = n
      if (n == 1) this.save.sizeName = 'Regular'
      else if (n == 1.3) this.save.sizeName = 'Large'
      else if (n == 1.5) this.save.sizeName = 'Xtra Large'
      else if (n == 1.02) {
        n = 1
        this.save.sizeName = '250 Gram'
      } else if (n == 1.4) this.save.sizeName = '300 Gram'
      else if (n == 2) this.save.sizeName = '500 Gram'

      this.save.qty = this.value
      this.save.total =
        this.save.qty * n * this.product.product_price -
        this.save.qty * n * this.product.product_price * this.getPromoSale

      const setData = {
        name: this.save.sizeName,
        mul: this.save.m,
        qnt: this.save.qty,
        total: Math.round(this.save.total)
      }
      if (this.myCarts.length < 1) {
        this.myCarts.push(setData)
      } else {
        const item = this.myCarts.find(el => el.name === setData.name)
        if (item === undefined) {
          this.myCarts.push(setData)
        } else {
          const index = this.myCarts.findIndex(el => el.name === setData.name)
          this.myCarts[index] = setData
        }
      }
      console.log(this.myCarts)
    },
    applyCoupon() {
      this.getPromoSale = this.coupons.coupon_discount
      this.$bvToast.toast(`You got discount ${this.getPromoSale * 100}%`, {
        title: 'Coupon is applied',
        variant: 'danger',
        solid: true
      })
    }
  }
}
</script>

<style scoped>
.main-set {
  background-color: white;
  min-height: 700px;
}
.breadcrumb {
  background-color: white;
  margin-left: 100px;
}

.detail-page {
  min-height: 800px;
  text-align: center;
  padding-top: 0px;
  position: relative;
}

.img-set {
  border-radius: 50%;
  width: 250px;
  height: 250px;
  object-fit: cover;
  padding-top: 10px;
}
.card-coldbrew2 {
  background-color: white;
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 50px auto;
  transition: 0.3s;
}

.card-coldbrew2 button {
  width: 30px;
  height: 30px;
  background-color: rgba(255, 186, 51, 1);
  margin-top: 20px;
  margin-bottom: 8px;
}

.card-coldbrew2 .food-size button {
  width: 35px;
  height: 35px;
  background-color: rgba(255, 186, 51, 1);
  margin-bottom: 30px;
  padding: 0;
}

.card-coldbrew2 button:hover {
  width: 35px;
  height: 35px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.card-coldbrew4,
.card-coldbrew5 {
  transition: 0.3s;
  border-radius: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background-color: white;
}

.card-coldbrew3 {
  width: 300px;
  border-radius: 10px;
  margin: 30px auto;
}

.card-coldbrew4 {
  text-align: center;

  width: 60%;
  height: 130px;

  margin-top: 50px;
  margin-bottom: -80px;
  margin-left: 250px;
}

.card-coldbrew5 {
  text-align: center;

  width: 35%;
  height: 130px;
  margin-top: 50px;
  margin-bottom: -80px;
  margin-left: 0px;
}

.card-coldbrew5 input.btn {
  background-color: rgba(255, 186, 51, 1);
  color: rgba(106, 64, 41, 1);
  width: 100%;
  height: 100%;
  box-shadow: 0 5px 5px 0 #999;
  border-radius: 30px;
}

.card-coldbrew5 input.btn:hover {
  background-color: rgba(106, 64, 41, 1);
  color: rgba(255, 186, 51, 1);
}

.card-coldbrew3 .btn {
  background-color: rgba(106, 64, 41, 1);
  color: white;
  box-shadow: 0px 6px 20px rgba(137, 85, 55, 0.4);
}

.card-coldbrew3 .btn:disabled {
  background-color: #f4f4f8;
  color: rgba(159, 159, 159, 1);
}

.card-coldbrew2 p {
  padding: 30px;
}

section {
  padding-top: 60px;
}

.img-coldbrew {
  width: 50px;
  align-self: center;
}

.counter-coldbrew p {
  margin-right: 10px;
  margin-left: 10px;
}

.counter-coldbrew button {
  width: 25px;
  height: 25px;
  background-color: rgba(255, 186, 51, 1);
  padding: 0;
}
.counter-coldbrew span {
  margin: 0 3px;
}
.button-set {
  width: 40%;
  margin: 8px auto;
}

.text-coldbrew h6 {
  margin-bottom: 10px;
}

.text-coldbrew p {
  margin-bottom: 5px;
  font-size: 12px;
}

.button-set button.btn-1 {
  background-color: rgba(106, 64, 41, 1);
  color: white;
}

.button-set button.btn-2 {
  background-color: rgba(255, 186, 51, 1);
}

.set-time {
  text-align: center;
  margin: 5px auto;

  width: 300px;
}
.left-time,
.right-time {
  background-color: white;
  border: none;
}
.set-time .right-time {
  border-bottom-width: thick;
  border-bottom-color: black;
}

#qtyBox {
  width: 30px;
  outline: none;
  border: none;
  text-align: center;
}

@media (max-width: 768px) {
  .card-coldbrew4 {
    width: 130px;
    height: 318px;

    margin: 50px auto 20px;
  }

  .card-coldbrew5 {
    width: 130px;
    height: 50px;

    margin: 0px auto 50px;
  }
}

@media (max-width: 992px) {
  .card-coldbrew4 {
    width: 160px;
    height: 318px;

    margin: 50px auto 20px;
  }

  .card-coldbrew5 {
    width: 130px;
    height: 50px;

    margin: 0px auto 50px;
  }
}
</style>
