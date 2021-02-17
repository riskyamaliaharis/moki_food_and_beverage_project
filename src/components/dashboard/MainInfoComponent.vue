<template>
  <div>
    <b-row>
      <b-col xl="4" lg="4" md="4" sm="12" cols="12"
        ><div class="card-dashboard">
          <h5>Today's Income</h5>
          <p>IDR</p>
          <h1>{{ infoToday }}</h1>
        </div></b-col
      >
      <b-col xl="4" lg="4" md="4" sm="12" cols="12"
        ><div class="card-dashboard">
          <h5>Year's Income</h5>
          <p>IDR</p>
          <h1>{{ infoYear }}</h1>
        </div></b-col
      >
      <b-col xl="4" lg="4" md="4" sm="12" cols="12">
        <div class="card-dashboard">
          <h5>Total Order This Week</h5>
          <p>Orders</p>
          <h1>{{ infoWeek }}</h1>
        </div></b-col
      >
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  created() {
    this.chartWeekVuex()
    this.chartMoVuex()
    this.infoTodayVuex()
    this.infoYearVuex()
    this.infoWeekVuex()
  },
  computed: {
    ...mapGetters({
      chartMo: 'setDataChartMo',
      chartWeek: 'setDataChartWeek',
      infoToday: 'setDataInfoToday',
      infoYear: 'setDataInfoYear',
      infoWeek: 'setDataInfoWeek'
    })
  },
  methods: {
    ...mapActions([
      'chartWeekVuex',
      'chartMoVuex',
      'infoTodayVuex',
      'infoYearVuex',
      'infoWeekVuex'
    ])
  }
}
</script>

<style scoped>
.card-dashboard {
  margin-top: 150px;
  background: #895537;
  height: 200px;
  border-radius: 15px;
  padding: 20px;
  color: white;
}
.card-dashboard h1 {
  font-size: 70px;
  margin-top: -15px;
}
</style>
