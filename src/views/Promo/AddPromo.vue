<template>
  <div>
    <Header />
    <b-container class="addpromo">
      <b-row align-h="center">
        <b-col cols="5">
          <Coupon />
          <AddPromoForm1 />
        </b-col>
        <b-col cols="5">
          <AddPromoForm2 />
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import AddPromoForm1 from '@/components/promo/AddPromoForm1.vue'
import AddPromoForm2 from '@/components/promo/AddPromoForm2.vue'
import Coupon from '@/components/promo/coupon.vue'
import Footer from '@/components/Footer.vue'
import { mapActions } from 'vuex'
export default {
  name: 'AddPromo',
  components: {
    AddPromoForm1,
    AddPromoForm2,
    Coupon,
    Header,
    Footer
  },
  data() {
    return {
      ...mapActions(['getProductsByIdVuexPromo']),
      promoProductId: ''
    }
  },
  created() {
    this.promoProductId = this.$route.params.id
    console.log('id ' + this.promoProductId)
    this.getProductsByIdVuexPromo(this.promoProductId)
  }
}
</script>

<style scoped></style>
