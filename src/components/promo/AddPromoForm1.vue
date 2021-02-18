<template>
  <div>
    <label for="input-with-list">Expire Date</label>
    <b-form-datepicker
      list="input-list"
      id="input-with-list"
      v-model="form.promoStartCoupon"
      @change="sendThisForm1"
    ></b-form-datepicker>
    <br />
    <b-form-datepicker
      list="input-list2"
      id="input-with-list2"
      class="input-box"
      v-model="form.promoEndCoupon"
      @change="sendThisForm1"
    ></b-form-datepicker>

    <label for="input-promo-code">Input Promo Code :</label>
    <b-form-input
      id="input-promo-code"
      class="input-box"
      v-model="form.promoCouponCode"
      @change="sendThisForm1"
    ></b-form-input>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {
        promoCouponCode: '',
        promoStartCoupon: '',
        promoEndCoupon: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      coupon_code: 'getDataCouponCodePromo',
      start_coupon: 'getDataStartCouponPromo',
      end_coupon: 'getDataEndCouponPromo'
    })
  },
  methods: {
    ...mapMutations(['changeForm1']),
    sendThisForm1() {
      console.log('masuk')
      console.log(this.form)
      this.changeForm1(this.form)
      console.log('success send form 1')
    }
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
