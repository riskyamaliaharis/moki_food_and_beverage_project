<template>
  <div class="profile">
    <Header />
    <div class="wrrapper-outer">
      <b-container>
        <div class="wrapper">
          <div class="user-set">
            <b-row align-h="center">
              <b-col xl="4" lg="5" md="4" sm="12" cols="12">
                <h3><b>User Profile</b></h3>
                <UserAct />
              </b-col>

              <b-col xl="8" lg="7" md="8" sm="12" cols="12">
                <UserBio />
              </b-col>
            </b-row>
          </div>
        </div>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import UserAct from '@/components/user/UserAct.vue'
import UserBio from '@/components/user/UserBio.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Profile',
  components: {
    UserAct,
    UserBio,
    Header,
    Footer
  },
  created() {
    this.getProfileVuex(this.user.user_id)
  },
  computed: {
    ...mapGetters({ user: 'setUser' })
  },
  methods: {
    ...mapActions(['getProfileVuex'])
  }
}
</script>

<style scoped>
.profile {
  background-image: url('../../assets/img/product/nathan-dumlao-XOhI_kW_TaM-unsplash 1.png');
  background-repeat: no-repeat;
  background-size: cover;
}

h3 {
  margin-top: 150px;
  color: white;
}
</style>
