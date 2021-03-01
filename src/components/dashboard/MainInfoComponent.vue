<template>
  <div>
    <b-container>
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
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  created() {
    this.infoTodayVuex()
    this.infoYearVuex()
    this.infoWeekVuex()
  },
  computed: {
    ...mapGetters({
      infoToday: 'setDataInfoToday',
      infoYear: 'setDataInfoYear',
      infoWeek: 'setDataInfoWeek'
    })
  },
  methods: {
    ...mapActions(['infoTodayVuex', 'infoYearVuex', 'infoWeekVuex'])
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
@media only screen and (max-width: 1000px) {
  .card-dashboard h1 {
    font-size: 50px;
  }
}
@media only screen and (max-width: 691px) {
  .card-dashboard {
    margin: 10px auto;
  }
  .card-dashboard h1 {
    font-size: 60px;
    margin-top: -5px;
  }
}
</style>
