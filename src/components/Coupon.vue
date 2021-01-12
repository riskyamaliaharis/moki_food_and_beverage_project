<template>
  <div class="left-side">
    <b-button v-b-toggle.sidebar-1 class="btn-coupon">Get Promo</b-button>
    <b-sidebar id="sidebar-1" title="Promo for you" shadow>
      <div class="px-3 py-2 show-card-promo">
        <p class="promo_info">
          Coupons will be updated every weeks. Check them out!
        </p>
        <ul class="list-group">
          <li v-for="item in cards" :key="item.coupon_id">
            <div class="card-coupon">
              <div class="box1">
                <img
                  class="rounded-circle"
                  src="../assets/img/product/image 29.png"
                  alt="spaghetti"
                />
                <h3 class="poppins">Beef</h3>
                <h3>{{ item.coupon_discount * 100 }}% OFF</h3>
                <p class="poppins">
                  {{ item.promo_description }}
                </p>
                <div class="line"></div>
                <p>COUPON CODE</p>
                <h2>{{ item.coupon_code }}</h2>
                <p>Valid until {{ item.end_coupon }}</p>
              </div>
            </div>
          </li>
        </ul>

        <vue-card-stack :cards="cards" :stack-width="480" :card-width="320">
          <template v-slot:card="{ card }">
            <div
              style="width: 100%; height: 100%;"
              :style="{ background: card.background }"
            ></div>
          </template>
        </vue-card-stack>

        <!-- <div class="box2"></div>
          <div class="box3"></div> -->

        <b-button class="button-promo" variant="dark" size="lg"
          >Edit Promo</b-button
        >
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import VueCardStack from 'vue-card-stack'
export default {
  components: {
    VueCardStack
  },
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
    ...mapActions(['getPromosVuex'])
  }
}
</script>
<style>
div.left-side .btn-coupon {
  background-color: black;
  width: 150px;
  position: absolute;
  top: 160px;
}
.promo_info {
  position: relative;
}

div.show-card-promo {
  height: 600px;
  overflow: auto;
}

.box1,
.box2,
.box3 {
  border-radius: 20px;
  position: relative;
  width: 240px;
}
.box1 {
  font-family: 'Rubik', sans-serif;

  height: 420px;
  background-color: #ffcb65;

  top: 100px;
  margin-bottom: 20px;
  left: 10px;
  z-index: 3;
  text-align: center;
}

div.box1 img {
  margin-top: 20px;
  width: 100px;
}

.button-promo {
  position: absolute;
  z-index: 10;
  margin-top: 520px;
  margin-left: 40px;
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
  z-index: 5;
}
p.promo_info {
  top: 70px;
  z-index: 6;
}

.col-lg-3 p {
  text-align: center;
}

.box2 {
  height: 380px;
  top: 170px;
  left: 30px;
  z-index: 2;
  background-color: black;
}
.box3 {
  z-index: 1;

  height: 300px;
  top: 210px;
  left: 45px;
  background-color: rgba(106, 64, 41, 1);
}

.apply_coupon {
  position: absolute;
  z-index: 5;
  top: 680px;
  left: -18px;
  width: 270px;
  border-radius: 15px;
  background-color: #895537;
  color: white;
}

#terms {
  position: absolute;
  z-index: 6;
  top: 760px;
  left: -18px;
}

#terms .coupon {
  text-align: left;
  font-size: 12px;
  line-height: 0.2;
}
.line {
  border: 1px dashed rgba(106, 64, 41, 1);
  margin-bottom: 10px;
}
</style>
