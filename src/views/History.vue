<template>
  <div class="history">
    <Header />
    <b-container class="historyCard">
      <div class="main-title">
        <h1>Let's see what you have bought</h1>
        <p>Long press to delete item</p>
      </div>
      <HistoryCard />
    </b-container>

    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import HistoryCard from '@/components/history/CardHistory.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'History',
  components: {
    HistoryCard,
    Header,
    Footer
  }
}
</script>

<style>
.history {
  background-image: url('../assets/img/product/tyler-nix-jE-27l7V3NU-unsplash 2.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 800px;
}
.historyCard {
  margin-bottom: 100px;
  padding-top: 150px;
}
.main-title {
  color: white;
  text-align: center;
  margin-top: 30px;
}
</style>
