<template>
  <div>
    <Header />
    <b-container class="editpromo">
      <b-row align-h="between">
        <b-col xl="4" lg="5" md="6" sm="12" cols="12">
          <Coupon />
          <EditPromoForm1 />
        </b-col>
        <b-col xl="6" lg="7" md="6" sm="12" cols="12">
          <EditPromoForm2 />
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import EditPromoForm1 from '@/components/promo/EditPromoForm1.vue'
import EditPromoForm2 from '@/components/promo/EditPromoForm2.vue'
import Coupon from '@/components/promo/CouponShow.vue'
import Footer from '@/components/Footer.vue'
import { mapActions } from 'vuex'
export default {
  name: 'EditPromo',
  data() {
    return {
      productId: ''
    }
  },
  created() {
    this.productId = this.$route.params.id
    this.getProductsByIdVuexPromo(this.productId)
    this.getPromoJoinProductVuex(this.productId)
    this.getPromosVuex()
  },
  components: {
    EditPromoForm1,
    EditPromoForm2,
    Coupon,
    Header,
    Footer
  },
  methods: {
    ...mapActions([
      'getProductsByIdVuexPromo',
      'getPromoJoinProductVuex',
      'getPromosVuex'
    ])
  }
}
</script>

<style scoped></style>
