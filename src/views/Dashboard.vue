<template>
  <div class="dashboard">
    <Header />
    <MainChart />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import MainChart from '@/components/dashboard/MainChart.vue'
export default {
  name: 'Dashboard',
  components: {
    Header,
    Footer,
    MainChart
  }
}
</script>

<style scoped></style>
