<template>
  <div>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap"
      rel="stylesheet"
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <b-row class="head" align-h="between">
      <b-col cols="3">
        <h2 class="satisfy">Moki</h2>
      </b-col>
      <b-col cols="3" class="sign-up">
        <p>
          <button class="w3-button w3-orange w3-round-xlarge sign-up">
            Login
          </button>
        </p>
      </b-col>
    </b-row>
    <h3 class="centered form-title">Sign Up</h3>

    <b-row align-h="center" class="signup-form">
      <b-col cols="4">
        <b-form>
          <label for="username">User Name</label>
          <b-form-input
            id="text-username"
            type="text"
            v-model="form.user_name"
            placeholder="Input Your User Name ..."
          />
          <br />
          <label for="text-email">Email Address</label>
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
          />
          <br />
          <br />
          <button
            @click="postDataUser"
            class="w3-btn w3-orange w3-round-xlarge submit"
          >
            Sign Up
          </button>
          <button type="reset" class="w3-btn w3-orange w3-round-xlarge">
            Reset
          </button>
          <br /><br />
          <br /><br />
          <br /><br />
          <button class="w3-button w3-orange w3-block w3-center-align">
            Create New
          </button>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
        user_name: ''
      }
    }
  },
  methods: {
    // ...mapActions(['registerVuex']),
    ...mapMutations(['setDataUserRegister']),
    postDataUser() {
      console.log(this.form)
      this.setDataUserRegister(this.form)
        .then(result => {
          console.log(result)
          this.$router.push('/login')
        })
        .catch(error => {
          alert(error.data.msg)
        })
    },
    onReset() {
      this.form = {
        email: '',
        password: '',
        username: ''
      }
    }
  }
}
</script>

<style scoped>
.satisfy {
  font-family: 'Satisfy', cursive;
  font-size: 40px;
}
.centered {
  text-align: center;
}
.head {
  margin-top: 30px;
  margin-bottom: 55px;
}

.form-title {
  margin-bottom: 30px;
}

button.submit {
  margin-right: 10px;
}

button.sign-up {
  width: 100px;
  border-radius: 10px;
  margin-top: 15px;
  padding-right: 30px;
}
</style>
