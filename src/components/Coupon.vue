<template>
  <div class="left-side">
    <b-button v-b-toggle.sidebar-1 class="btn-coupon">Get Promo</b-button>
    <b-sidebar width="400px" id="sidebar-1" title="Promo for you" shadow>
      <div class="px-3 py-2 show-card-promo">
        <div
          :class="i % 2 === 0 ? 'card brown' : 'card orange'"
          v-for="(el, i) in cards"
          :key="i"
        >
          <i
            class="fa fa-close 3x"
            style="position: absolute;  margin-left: 300px; cursor: pointer"
          ></i>
          <b-row align-v="center">
            <b-col cols="4">
              <img
                v-if="el.image_src"
                :src="'http://localhost:3000/' + el.image_src"
                alt="product"
                class="image"
              />
              <img
                v-else
                src="../assets/img/unnamed1.png"
                alt="product"
                class="image"
              />
            </b-col>
            <b-col cols="7" class="coupon-info">
              <p class="name">{{ el.product_name.toUpperCase() }}</p>
              <h5>Discount {{ el.coupon_discount * 100 }}%</h5>
              <p>
                FROM {{ formatTime1(el.start_coupon) }} UNTIL
                {{ formatTime1(el.end_coupon) }}
              </p>
              <p>Expired {{ formatTime(el.end_coupon) }}</p>
              <p>{{ el.promo_description }}</p>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import moment from 'moment'
export default {
  data() {
    return {}
  },
  created() {
    this.getPromosVuex()
  },
  computed: {
    ...mapGetters({ cards: 'getAllCoupons' })
  },
  methods: {
    ...mapActions(['getPromosVuex']),
    formatTime(value) {
      moment.locale('en')
      return moment(String(value))
        .endOf('day')
        .fromNow()
    },
    formatTime1(value) {
      moment.locale('en')
      return moment(String(value)).format('MMM Do YY')
    }
  }
}
</script>
<style scoped>
.coupon-info p {
  font-size: 13px;
  margin-bottom: 10px;
}
.coupon-info p.name {
  letter-spacing: 5px;
  font-weight: 800;
  font-size: 20px;
}
div.left-side .btn-coupon {
  background-color: white;
  width: 106px;
  position: absolute;
  top: 190px;
  color: #895537;
  border-color: #895537;
  border-radius: 20px 0 0 20px;
}

div.show-card-promo {
  height: 670px;
  overflow: auto;
  padding: 10px;
}

.card {
  /* height: 125px; */
  margin-bottom: 20px;
  padding: 10px 15px;
  border-radius: 10px;
}
.brown {
  background: #895537;
  color: white;
}
.orange {
  background: #ffba33;
  color: black;
}
.image {
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 30px;
}
</style>
