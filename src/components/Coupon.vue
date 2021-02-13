<template>
  <div class="left-side">
    <b-button v-b-toggle.sidebar-1 class="btn-coupon">Get Promo</b-button>
    <b-sidebar id="sidebar-1" title="Promo for you" shadow>
      <div class="px-3 py-2 show-card-promo">
        <div
          :class="i % 2 === 0 ? 'card brown' : 'card orange'"
          v-for="(el, i) in cards"
          :key="i"
        >
          <b-row align-v="baseline">
            <b-col cols="5">
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
            <b-col cols="7">{{ el }}</b-col>
          </b-row>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

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
    ...mapActions(['getPromosVuex'])
  }
}
</script>
<style scoped>
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
  height: 125px;
  margin-bottom: 20px;
  padding: 7px;
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
  width: 107px;
  height: 107px;
  object-fit: cover;
  border-radius: 30px;
}
</style>
