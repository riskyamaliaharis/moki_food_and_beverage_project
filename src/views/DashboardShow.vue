<template>
  <div class="dashboard">
    <Header />
    <div class="show">
      <b-container>
        <b-row align-h="center">
          <b-col>
            <MainInfoShow />
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
export default {
  components: {
    Header,
    Footer,
    MainInfoShow
  },
  mounted() {}
}
</script>

<style scoped></style>
