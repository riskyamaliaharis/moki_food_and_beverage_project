<template>
  <div class="d-flex flex-column box-payment">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
      rel="stylesheet"
    />
    <div class="p-2 poppins order-summary">
      <strong>Order Summary</strong>
    </div>
    <div class="order-list">
      <div
        class="orders"
        v-for="(el, i) in cart"
        :key="i"
        style=" background:white; padding : 5px 0"
      >
        <button
          type="button"
          class="close"
          data-dismiss="modal"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <b-row align-h="start" align-v="center">
          <b-col cols="3"
            ><b-img
              :src="'http://localhost:3000/' + el.image_src"
              width="60"
              style="border-radius:10px"
              alt="placeholder"
            ></b-img
          ></b-col>

          <b-col cols="9">
            <b>{{ el.product_name.toUpperCase() }}</b>
            <div class="detail-order">
              <b-row
                align-h="start"
                v-for="(elemen, index) in el.mycarts"
                :key="index"
              >
                <b-col cols="5">{{ elemen.name }}</b-col>
                <b-col cols="1">x{{ elemen.qnt }}</b-col>
                <b-col cols="4" style="text-align: right"
                  ><b>{{ elemen.total }}</b>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="order-price table-responsive-sm">
      <table class="table">
        <tbody>
          <tr>
            <td>SUBTOTAL</td>
            <td class="right">IDR {{ total_price }}</td>
          </tr>
          <tr>
            <td>TAX & FEES</td>
            <td class="right">IDR {{ tax }}</td>
          </tr>
          <tr>
            <td>SHIPPING</td>
            <td class="right">IDR {{ shipping }}</td>
          </tr>
          <tr>
            <td><strong>TOTAL</strong></td>
            <td class="right">
              <strong>IDR {{ total_price + (tax + shipping) }}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      tax: 8000,
      shipping: 10000
    }
  },
  computed: {
    ...mapGetters({ cart: 'getCart', total_price: 'totalPrice' })
  }
}
</script>

<style scoped>
.order-list {
  background-color: #eee;
  width: 80%;
  height: 300px;
  margin: 0 auto;
  border: none;
  overflow: auto;
}
.order-price {
  width: 80%;
  margin: 0 auto;
}

.right {
  text-align: left;
  padding-left: 130px;
}
.box-payment {
  margin-top: 50px;
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.35);
  border-radius: 20px;
}
.poppins {
  font-family: 'Poppins', sans-serif;
}
.box-payment .p-2 {
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  line-height: 52px;
}
</style>
