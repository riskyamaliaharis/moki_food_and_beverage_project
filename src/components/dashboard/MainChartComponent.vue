<template>
  <div>
    <b-dropdown
      id="dropdown-dropright"
      dropright
      text="Revenue Chart"
      variant="warning"
      class="m-2"
    >
      <b-dropdown-item @click="perMonth">Revenue Per Month</b-dropdown-item>
      <b-dropdown-item @click="perWeek">Revenue Per Week</b-dropdown-item>
    </b-dropdown>
    <line-chart
      xtitle="Month"
      ytitle="Revenue"
      v-if="revenue === 'month'"
      :data="myDataPerMonth"
      :colors="['#895537', '#666']"
    ></line-chart>
    <line-chart
      xtitle="Day"
      ytitle="Revenue"
      v-else-if="revenue === 'week'"
      :data="myDataPerWeek"
      :colors="['rgba(255, 186, 51, 1)', '#666']"
    ></line-chart>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Dashboard',
  async created() {
    await this.chartWeekVuex()
    await this.chartMoVuex()
    await this.perMonth()
  },
  data() {
    return {
      revenue: 'month',
      myDataPerMonth: [],
      myDataPerWeek: []
    }
  },
  computed: {
    ...mapGetters({
      chartMo: 'setDataChartMo',
      chartWeek: 'setDataChartWeek'
    })
  },
  methods: {
    ...mapActions(['chartWeekVuex', 'chartMoVuex']),
    perMonth() {
      this.revenue = 'month'
      const obj = {
        name: '',
        data: {}
      }

      obj.name = 'Revenue Per Month'
      for (let k = 0; k < this.chartMo.length; k++) {
        if (this.chartMo[k].month === 1) obj.data.JAN = this.chartMo[k].subtotal
        else if (this.chartMo[k].month === 2)
          obj.data.FEB = this.chartMo[k].subtotal
        else if (this.chartMo[k].month === 3)
          obj.data.MAR = this.chartMo[k].subtotal
        else if (this.chartMo[k].month === 4)
          obj.data.APR = this.chartMo[k].subtotal
        else if (this.chartMo[k].month === 5)
          obj.data.MAY = this.chartMo[k].subtotal
        else if (this.chartMo[k].month === 6)
          obj.data.JUN = this.chartMo[k].subtotal
        else if (this.chartMo[k].month === 7)
          obj.data.JUL = this.chartMo[k].subtotal
        else if (this.chartMo[k].month === 8)
          obj.data.AUG = this.chartMo[k].subtotal
        else if (this.chartMo[k].month === 9)
          obj.data.SEP = this.chartMo[k].subtotal
        else if (this.chartMo[k].month === 10)
          obj.data.OCT = this.chartMo[k].subtotal
        else if (this.chartMo[k].month === 11)
          obj.data.NOV = this.chartMo[k].subtotal
        else if (this.chartMo[k].month === 12)
          obj.data.DEC = this.chartMo[k].subtotal
      }
      if (this.myDataPerMonth.length < 1) {
        this.myDataPerMonth.push(obj)
      }
    },
    perWeek() {
      this.revenue = 'week'
      const obj = {
        name: '',
        data: {}
      }
      obj.name = 'Revenue Per Week'
      for (let k = 0; k < this.chartWeek.length; k++) {
        if (this.chartWeek[k].day === 1)
          obj.data.SUN = this.chartWeek[k].subtotal
        else if (this.chartWeek[k].day === 2)
          obj.data.MON = this.chartWeek[k].subtotal
        else if (this.chartWeek[k].day === 3)
          obj.data.TUE = this.chartWeek[k].subtotal
        else if (this.chartWeek[k].day === 4)
          obj.data.WED = this.chartWeek[k].subtotal
        else if (this.chartWeek[k].day === 5)
          obj.data.THU = this.chartWeek[k].subtotal
        else if (this.chartWeek[k].day === 6)
          obj.data.FRI = this.chartWeek[k].subtotal
        else if (this.chartWeek[k].day === 7)
          obj.data.SAT = this.chartWeek[k].subtotal
      }
      if (this.myDataPerWeek.length < 1) {
        this.myDataPerWeek.push(obj)
      }
    }
  }
}
</script>
