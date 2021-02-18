<template>
  <div>
    <label for="input-with-list">Expire Date</label>
    <b-form-datepicker
      list="input-list"
      id="input-with-list"
      v-model="data.start_coupon"
    ></b-form-datepicker>
    <br />
    <b-form-datepicker
      list="input-list2"
      id="input-with-list2"
      class="input-box"
      v-model="data.end_coupon"
    ></b-form-datepicker>

    <label for="input-promo-code">Input Promo Code :</label>
    <b-form-input
      id="input-promo-code"
      class="input-box"
      v-model="data.coupon_code"
    ></b-form-input>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      data1: 'getAllCoupons',
      data: 'getproductPromo'
    })
  }
}
</script>
<style scoped>
label {
  color: rgba(106, 64, 41, 1);
  font-weight: 500;
  font-size: 15px;
}
.input-box {
  margin-bottom: 30px;
}
</style>
