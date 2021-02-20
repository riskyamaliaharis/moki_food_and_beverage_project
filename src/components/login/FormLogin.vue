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
    <h3 class="centered">Sign In</h3>

    <b-row align-h="center">
      <b-col cols="10">
        <b-form @submit.prevent="onSubmit" @reset.prevent="onReset">
          <label for="text-email">Email</label>
          <b-form-input
            v-focus
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
          <br /><br />
          <button type="submit" class="w3-btn w3-round-xlarge submit">
            Sign In
          </button>
          <br />
          <br />
          <button type="reset" class="w3-btn w3-round-xlarge">
            Reset
          </button>
          <br /><br />
          <div class="centered">
            <b-button
              variant="light"
              id="show-btn"
              @click="$bvModal.show('bv-modal-example')"
              >Forgot Password ?</b-button
            >
          </div>

          <b-modal id="bv-modal-example" hide-footer>
            <template #modal-title>
              Forgot Your Password ?
            </template>
            <div class="d-block text-center">
              <b-row align-v="center">
                <b-col cols="3"
                  ><img src="../../assets/img/keylock.png" width="80" alt=""
                /></b-col>
                <b-col cols="8"
                  >Don't worry! Fill your email in this form below and we'll
                  send you a link to reset your password</b-col
                >
              </b-row>
              <b-row align-h="center">
                <b-col cols="8">
                  <br />
                  <b-form-input
                    id="email"
                    type="email"
                    v-model="emailForgot"
                    placeholder="Input Your Email ..."
                  />
                </b-col>
              </b-row>
            </div>
            <b-button
              block
              variant="outline-warning"
              class="mt-3"
              @click="reset"
              >Reset Password</b-button
            >
          </b-modal>
          <br /><br />
          <br />
          <button class="w3-button create-new w3-block w3-center-align">
            Create New
          </button>
        </b-form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { alert } from '../../mixins/alert'
export default {
  mixins: [alert],
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      emailForgot: ''
    }
  },
  computed: {
    ...mapState({ dataName: 'name' })
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus()
      }
    }
  },
  methods: {
    ...mapActions(['login', 'sendEmailForgot']),
    onSubmit() {
      this.login(this.form)
        .then(result => {
          this.successAlert(result.data.msg)
          this.$router.push('/product')
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
    },
    onReset() {
      this.form = {
        email: '',
        password: ''
      }
    },
    reset() {
      const email = this.emailForgot
      this.sendEmailForgot({ email })
        .then(result => {
          this.successAlert(result.data.msg)
          this.emailForgot = ''
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
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

@media only screen and (max-width: 991px) {
  .white {
    color: white;
  }
}
</style>
