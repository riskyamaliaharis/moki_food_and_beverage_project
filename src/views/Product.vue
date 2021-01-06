<template>
  <div class="home">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Header />
    <br /><br /><br /><br /><br />
    <!-- <Sorting @sort="getProductSorting" :sort="sort" />
    <Navbar @category="handleCategory" /> -->
    <Navbar />
    <Sorting />
    <Coupon />
    <div>
      <b-button to="/editproduct" block class="toggle-add" v-if="role === 1"
        >Add New Product</b-button
      >
    </div>

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

export default {
  name: 'Product',
  components: {
    Header,
    Footer,
    Navbar,
    Coupon,
    Card,
    Sorting
  }
}
</script>

<style scoped>
.toggle-add {
  margin-top: 300px;
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
