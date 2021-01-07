<template>
  <div>
    <Header />
    <b-container class="addproduct">
      <b-row align-h="center">
        <b-col cols="5">
          <Picture />
          <Left />
        </b-col>
        <b-col cols="5">
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
