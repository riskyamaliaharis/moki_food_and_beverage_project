<template>
  <div class="login">
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="6">
          <div class="left">
            <Jumbotron />
          </div>
        </b-col>
        <b-col cols="6">
          <div class="right"><FormLogin /></div>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Jumbotron from '@/components/login/Jumbotron.vue'
import FormLogin from '@/components/login/FormLogin.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Login',
  components: {
    Jumbotron,
    FormLogin,
    Footer
  }
}
</script>

<style>
div.right {
  margin-right: -100px;
  /* background-color: yellowgreen; */
}
</style>
