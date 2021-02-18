<template>
  <div>
    <!-- <line-chart :data="{ '2017-01-01': 11, '2017-01-02': 6 }"></line-chart> -->
    <line-chart :data="chartData"></line-chart>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      chartData: { '2017-01-01': 11, '2017-01-02': 6 }
    }
  }
}
</script>
