<template>
  <div>
    <Header />
    <b-container class="addpromo">
      <b-row align-h="between">
        <b-col xl="4" lg="5" md="6" sm="12" cols="12">
          <Coupon />
          <AddPromoForm1 />
        </b-col>
        <b-col xl="6" lg="7" md="6" sm="12" cols="12">
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
      promoProductId: ''
    }
  },
  methods: {
    ...mapActions(['getProductsByIdVuexPromo'])
  },
  created() {
    this.promoProductId = this.$route.params.id
    this.getProductsByIdVuexPromo(this.promoProductId)
  }
}
</script>

<style scoped></style>
