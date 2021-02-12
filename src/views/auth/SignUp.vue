<template>
  <div class="login bg">
    <b-container fluid class="bv-example-row ">
      <b-row align-h="center">
        <b-col cols="12" md="10" sm="10" lg="4" xl="4">
          <div class="left">
            <Jumbotron />
          </div>
        </b-col>
        <b-col align-content="end" cols="12" md="10" sm="10" lg="4" xl="4">
          <div class="right"><FormSignUp /></div>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Jumbotron from '@/components/login/Jumbotron.vue'
import FormSignUp from '@/components/signup/FormSignUp.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'SignUp',
  components: {
    Jumbotron,
    FormSignUp,
    Footer
  }
}
</script>

<style>
div.right {
  margin-right: -100px;
}
@media only screen and (max-width: 991px) {
  .left {
    display: none;
  }
  .bg {
    background-repeat: no-repeat;
    background: url('../../assets/img/product/robert-bye-95vx5QVl9x4-unsplash 2.png');
  }
  div.right {
    margin-right: 0;
  }
}
</style>
