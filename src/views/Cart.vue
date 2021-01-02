<template>
  <div class="cart">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Header />
    <b-container class="bv-example-row">
      <b-row>
        <b-col xl="5" offset-xl="1" lg="5" offset-lg="1">
          <div class="left">
            <p class="checkout-item">Checkout your item now!</p>
            <OrderSummary />
          </div>
        </b-col>
        <b-col xl="5" lg="5">
          <div class="right"><AddressAndPayment /></div>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import OrderSummary from '@/components/cart/OrderSummary.vue'
import AddressAndPayment from '@/components/cart/AddressAndPayment.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Cart',
  components: {
    OrderSummary,
    AddressAndPayment,
    Header,
    Footer
  }
}
</script>

<style scoped>
.cart {
  background-image: url('../assets/img/product/nathan-dumlao-zTZRZV86GhE-unsplash 1.png');
  background-repeat: no-repeat;
  background-size: cover;
}
p.checkout-item {
  font-weight: bold;
  font-size: 40px;
  line-height: 47px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.8);
  margin-top: 130px;
  margin-bottom: 50px;
}
</style>
