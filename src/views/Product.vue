<template>
  <div class="home">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Header />
    <br /><br /><br /><br /><br />
    <Navbar />
    <div>
      <b-button
        to="/createproduct"
        v-if="user.user_role === 1"
        block
        class="toggle-add"
        >Add New Product</b-button
      >
    </div>

    <Coupon />
    <Sorting class="sort" />

    <Card />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Navbar from '@/components/Navbar.vue'
import Coupon from '@/components/Coupon.vue'
import Card from '@/components/product/Card.vue'
import Sorting from '@/components/Sorting.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Product',

  components: {
    Header,
    Footer,
    Navbar,
    Coupon,
    Card,
    Sorting
  },
  computed: {
    ...mapGetters({ user: 'setUser' })
  }
}
</script>

<style scoped>
.sort {
  margin-top: 20px;
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
