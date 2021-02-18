<template>
  <div class="show-coupon">
    <div class="box1">
      <img
        class="rounded-circle"
        :src="`http://localhost:3000/${data.image_src}`"
        alt="spaghetti"
      />
      <h3 class="poppins">{{ data.product_name }}</h3>
      <h3>{{ data.coupon_discount * 100 }}% OFF</h3>
      <p class="poppins">
        {{ data.product_description }}
      </p>
      <div class="line"></div>
      <p>COUPON CODE</p>
      <h2>{{ data.coupon_code }}</h2>
      <p>Valid until {{ formatTime1(data.end_coupon) }}</p>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      data: 'getproductPromo'
    })
  },
  methods: {
    formatTime1(value) {
      moment.locale('en')
      return moment(String(value)).format('MMM Do YY')
    }
  }
}
</script>

<style scoped>
.box1 {
  border-radius: 20px;
  font-family: 'Rubik', sans-serif;
  position: static;
  height: 420px;
  background-color: #ffcb65;
  text-align: center;
  margin-top: 120px;
  margin-bottom: 20px;
}

div.box1 img {
  margin-top: 20px;
  width: 100px;
}

.col-lg-3 .box1 p {
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 5px;
}

.col-lg-3 h1.promo_info {
  font-weight: 700;
  font-size: 20px;
  line-height: 18px;
  text-align: center;
  margin-bottom: 0px;
  left: 70px;
  top: 40px;
}
p.promo_info {
  top: 70px;
}

.col-lg-3 p {
  text-align: center;
}

.line {
  border: 1px dashed rgba(106, 64, 41, 1);
  margin-bottom: 10px;
}
</style>
