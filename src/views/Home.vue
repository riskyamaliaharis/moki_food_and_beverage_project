<template>
  <div class="home">
    <Header />
    <Jumbotron />
    <b-container class="bv-example-row bv-example-row-flex-cols">
      <b-row class="info" align-v="center">
        <b-col>
          <LeftHome />
        </b-col>
        <b-col>
          <RightHome />
        </b-col>
      </b-row>
    </b-container>

    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/home/Jumbotron.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LeftHome from '@/components/home/LeftHome.vue'
import RightHome from '@/components/home/RightHome.vue'

export default {
  name: 'Home',
  components: {
    Jumbotron,
    Header,
    Footer,
    LeftHome,
    RightHome
  }
}
</script>

<style scoped>
.info {
  margin-top: 80px;
}
</style>
