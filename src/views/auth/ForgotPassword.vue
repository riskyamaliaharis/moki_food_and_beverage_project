<template>
  <div class="login bg">
    <div class="forgot">
      <b-container fluid>
        <b-row align-h="center">
          <b-col xl="5" lg="6" md="6" sm="10" cols="10">
            <Forgot />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Forgot from '../../components/forgot/ForgotPasswordComponent.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'ForgotPassword',
  components: {
    Footer,
    Forgot
  }
}
</script>

<style>
div.col {
  padding: 0;
}

.forgot {
  background-image: url('../../assets/img/product/nani-williams-6PpLqUlCA0s-unsplash 1.png');
  color: white;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 180px 0;
}
</style>
