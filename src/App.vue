<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'App',
  created() {
    this.interceptorRequest()
    this.interceptorResponse()
    console.log(process.env.VUE_APP_ROOT_URL)
    console.log(process.env.VUE_APP_ROOT_URL_MOKI)
  },
  methods: {
    ...mapActions(['interceptorRequest']),
    ...mapActions(['interceptorResponse'])
  }
}
</script>
<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
