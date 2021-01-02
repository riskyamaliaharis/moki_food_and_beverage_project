<template>
  <div>
    <h1>Halaman Login</h1>
    <h3>{{ dataName }}</h3>
    <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
      <input
        type="email"
        v-model="form.email"
        placeholder="Input Your Email ..."
      /><br />
      <input
        type="password"
        v-model="form.password"
        placeholder="Input Your Password ..."
      />
      <br />
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    // 1st
    // dataName() {
    //   return this.$store.state.name
    // }
    // 2nd
    ...mapState(['name']),
    ...mapState({ dataName: 'name' })
  },
  methods: {
    //mapActions & mapMutations
    onSubmit() {
      console.log(this.form)
      this.login(this.form)
        .then(result => {
          console.log(result)
          this.$router.push('/product')
        })
        .catch(error => {
          alert(error.data.msg)
        })
    },
    onReset() {
      this.form = {
        email: '',
        password: ''
      }
    },
    ...mapActions(['login'])
  }
}
</script>
