<template>
  <div class="white">
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <b-row class="head " align-v="center" align-h="center">
      <b-col cols="5">
        <h2 class="satisfy">Moki</h2>
      </b-col>
      <b-col cols="5" class="sign-up">
        <div style="text-align: right;">
          <button class="w3-button  w3-round-xlarge sign-up" to="/signup">
            Sign-Up
          </button>
        </div>
      </b-col>
    </b-row>
    <h3 class="centered">Sign Up</h3>

    <b-row align-h="center">
      <b-col cols="10">
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <label for="text-username">Username</label>
          <b-form-input
            id="text-username"
            type="text"
            v-model="form.user_name"
            placeholder="Input Your Username ..."
          /><br />
          <label for="text-email">Email</label>
          <b-form-input
            id="text-email"
            type="email"
            v-model="form.email"
            placeholder="Input Your Email ..."
          /><br />
          <label for="text-password">Password</label>
          <b-form-input
            id="text-password"
            type="password"
            v-model="form.password"
            placeholder="Input Your Password ..."
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
          <br /><br />
          <button type="submit" class="w3-btn w3-round-xlarge submit">
            Submit
          </button>
          <br />
          <br />
          <button type="reset" class="w3-btn w3-round-xlarge">
            Reset
          </button>
          <br /><br />
        </b-form>
      </b-col>
    </b-row>
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
        user_name: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    onSubmit() {
      this.register(this.form)
        .then(result => {
          this.successAlert(result.data.msg)
          this.$router.push('/login')
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
    },
    onReset() {
      this.form = {
        user_name: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
button.w3-button,
.w3-btn {
  text-align: center;
  background-color: #ffba33;
}
.w3-btn {
  width: 100%;
}
.create-new {
  margin-bottom: 20px;
}
.satisfy {
  font-family: 'Satisfy', cursive;
  font-size: 40px;
}
.centered {
  text-align: center;
}
.head {
  margin-top: 30px;
  margin-bottom: 50px;
}

button.sign-up {
  width: 100px;
  border-radius: 10px;
  margin-top: 15px;
}

button[type='reset'] {
  margin-bottom: 65px;
}
@media only screen and (max-width: 991px) {
  .white {
    color: white;
  }
}
</style>
