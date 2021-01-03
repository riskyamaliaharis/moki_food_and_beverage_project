<template>
  <div class="signup">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="6">
          <div class="left">
            <Jumbotron />
          </div>
        </b-col>
        <b-col cols="6">
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
@media (max-width: 576px) {
}
</style>
