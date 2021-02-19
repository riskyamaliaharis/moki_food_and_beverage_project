<template>
  <div>
    <Header />
    <b-container class="addproduct">
      <b-row align-h="between">
        <b-col xl="5" lg="5" md="4" sm="10" cols="12">
          <Picture />
          <Left />
        </b-col>
        <b-col xl="5" lg="5" md="6" sm="10" cols="12">
          <Right />
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Picture from '@/components/Picture.vue'
import Left from '@/components/product/AddProductLeft.vue'
import Right from '@/components/product/AddProductRight.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'CreateProduct',
  components: {
    Left,
    Picture,
    Right,
    Header,
    Footer
  }
}
</script>

<style scoped></style>
