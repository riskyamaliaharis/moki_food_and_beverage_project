<template>
  <div class="profile">
    <Header />
    <div>
      <div class="user-set">
        <b-row align-h="center">
          <b-col cols="2">
            <h3><b>User Profile</b></h3>
            <UserAct />
          </b-col>

          <b-col cols="6">
            <UserBio />
          </b-col>
        </b-row>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import UserAct from '@/components/user/UserAct.vue'
import UserBio from '@/components/user/UserBio.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'Profile',
  components: {
    UserAct,
    UserBio,
    Header,
    Footer
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
