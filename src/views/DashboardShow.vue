<template>
  <div class="dashboard">
    <Header />
    <div class="show">
      <b-container>
        <b-row align-h="center">
          <b-col>
            <MainInfoShow />
            <br /><br />
            <MainChartShow />
          </b-col>
        </b-row>
      </b-container>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import MainInfoShow from '@/components/dashboard/MainInfoComponent.vue'
import MainChartShow from '@/components/dashboard/MainChartComponent.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    Header,
    Footer,
    MainInfoShow,
    MainChartShow
  },
  computed: {
    ...mapGetters({ user: 'setUser' })
  }
}
</script>

<style scoped></style>
