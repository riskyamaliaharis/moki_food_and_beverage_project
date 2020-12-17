<template>
  <div class="YouCart">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <Header />
    <b-container>
      <main>
        <b-row>
          <b-col>
            <div class="left-side"></div>
          </b-col>
          <b-col>
            <div class="right-side"></div>
          </b-col>
        </b-row>
      </main>
    </b-container>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
// import axios from 'axios'

export default {
  name: 'YouCart',
  components: {
    Header,
    Footer
  }
}
</script>
<style scoped></style>
