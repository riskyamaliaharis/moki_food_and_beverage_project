<template>
  <div>
    <div class="form-forgot">
      <b-button @click="letsVerify">Verify Email</b-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { alert } from '../../mixins/alert'
export default {
  mixins: [alert],
  data() {
    return {
      keys: ''
    }
  },
  created() {
    this.keys = this.$route.params.keys
  },
  methods: {
    ...mapActions(['verifyAccount']),
    letsVerify() {
      this.verifyAccount(this.keys)
        .then(result => {
          this.successAlert(result.data.msg)
          this.$router.push('/login')
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
    }
  }
}
</script>
<style scoped>
button {
  width: 100%;
  margin-bottom: 5px;
  margin-top: 15px;
  background-color: #ffba33;
}
</style>
