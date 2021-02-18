<template>
  <div>
    <Header />
    <b-container class="editpromo">
      <b-row align-h="center">
        <b-col cols="5">
          <Coupon />
          <EditPromoForm1 />
        </b-col>
        <b-col cols="5">
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
