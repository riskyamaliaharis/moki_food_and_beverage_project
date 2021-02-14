<template>
  <div>
    <div class="form-forgot">
      <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
        <label for="new-password">New Password</label>
        <b-form-input
          id="new-password"
          type="password"
          placeholder="Input Your New Password ..."
          v-model="form.newPassword"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
        />
        <label for="confirm-password">Confirm New Password</label>
        <b-form-input
          id="confirm-password"
          type="password"
          v-model="form.confirmPassword"
          placeholder="Confirm Your New Password ..."
        />
        <b-button type="submit" class="w3-btn w3-round-xlarge submit">
          Change Password
        </b-button>
      </b-form>
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
      form: {
        key: '',
        newPassword: '',
        confirmPassword: ''
      }
    }
  },
  created() {
    this.form.key = this.$route.params.keys
  },
  methods: {
    ...mapActions(['changePassBecauseForgot']),
    onSubmit() {
      this.changePassBecauseForgot(this.form)
        .then(result => {
          this.successAlert(result.data.msg)
          this.$router.push('/login')
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
          if (
            error.data.msg === 'Keys is expired. Please Resend Your Email' ||
            error.data.msg === 'Something Wrong. Please Resend Your Email'
          ) {
            this.$router.push('/login')
          }
        })
    },
    onReset() {
      this.form = {
        key: '',
        newPassword: '',
        confirmPassword: ''
      }
    }
  }
}
</script>
<style scoped>
input {
  margin-bottom: 20px;
}
button {
  width: 100%;
  margin-bottom: 5px;
  margin-top: 15px;
  background-color: #ffba33;
}
</style>
