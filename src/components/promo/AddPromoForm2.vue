<template>
  <div>
    <label for="input-name" class="name">Name :</label>
    <b-form-input
      class="input-text"
      v-model="productPromo.product_name"
      id="input-name"
      readonly="readonly"
      >{{ productPromo.product_name }}</b-form-input
    >

    <label for="input-pice">Normal Price :</label>
    <b-form-input
      class="input-text"
      v-model="productPromo.product_price"
      id="input-price"
      readonly="readonly"
      >{{ productPromo.product_price }}</b-form-input
    >

    <label for="input-desc">Description :</label>
    <b-form-input
      class="input-text"
      id="input-desc"
      v-model="form.promoDescription"
    ></b-form-input>

    <label>Input Product Size :</label>
    <br />
    <b-row>
      <b-col class="beverage-size">
        <button class="button button-rounded" @click="generateThisSize(1)">
          R
        </button>
        <button class="button button-rounded" @click="generateThisSize(2)">
          L
        </button>
        <button class="button button-rounded" @click="generateThisSize(3)">
          XL
        </button>
      </b-col>
      <b-col class="food-size">
        <button class="button button-rounded" @click="generateThisSize(4)">
          150
        </button>
        <button class="button button-rounded" @click="generateThisSize(5)">
          200
        </button>
        <button class="button button-rounded" @click="generateThisSize(6)">
          250
        </button>
      </b-col>
    </b-row>

    <label>Input Delivery Methods :</label>
    <b-row>
      <b-col class="deliv-method">
        <button class="button" @click="generateThisDelivMethod(1)">
          Home Delivery
        </button>
        <button class="button" @click="generateThisDelivMethod(2)">
          Dine In
        </button>
        <button class="button" @click="generateThisDelivMethod(3)">
          Take Away
        </button>
      </b-col>
    </b-row>
    <label for="input-discount">Discount</label>

    <b-dropdown text="Discount" variant="outline-warning" class="m-2">
      <b-dropdown-item @click="addDiscountPromo(1)">15%</b-dropdown-item>
      <b-dropdown-item @click="addDiscountPromo(2)">20%</b-dropdown-item>
      <b-dropdown-item @click="addDiscountPromo(3)">30%</b-dropdown-item>
      <b-dropdown-item @click="addDiscountPromo(4)">40%</b-dropdown-item>
      <b-dropdown-item @click="addDiscountPromo(5)">50%</b-dropdown-item>
      <b-dropdown-item @click="addDiscountPromo(6)">70%</b-dropdown-item>
    </b-dropdown>

    <button class="save-button" @click="addPromoToStore">Save</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data() {
    return {
      name: 'AddPromoForm2',
      form: {
        promoCouponDiscount: '',
        promoSize: '',
        promoDelivMethod: '',
        promoDescription: '',
        promoProductId: ''
      }
    }
  },

  computed: {
    ...mapGetters({ productPromo: 'getDataProductUpdatedPromo' })
  },
  created() {
    this.form.promoProductId = this.productPromo.product_id
    console.log('Nyampe kanan ' + this.productPromo.product_id)
  },
  methods: {
    ...mapMutations(['inputForm2ToStore']),
    ...mapActions(['postPromoVuex']),
    addDiscountPromo(num) {
      if (num === 1) this.form.promoCouponDiscount = 0.15
      else if (num === 2) this.form.promoCouponDiscount = 0.2
      else if (num === 3) this.form.promoCouponDiscount = 0.3
      else if (num === 4) this.form.promoCouponDiscount = 0.4
      else if (num === 5) this.form.promoCouponDiscount = 0.5
      else this.form.promoCouponDiscount = 0.7
      console.log('promo ' + this.form.promoCouponDiscount)
    },
    generateThisSize(num) {
      if (num === 1) this.form.promoSize = 1
      else if (num === 2) this.form.promoSize = 1.35
      else if (num === 3) this.form.promoSize = 1.7
      else if (num === 4) this.form.promoSize = 1
      else if (num === 5) this.form.promoSize = 1.4
      else if (num === 6) this.form.promoSize = 1.72
      console.log('Size ' + this.form.promoSize)
    },
    generateThisDelivMethod(num) {
      if (num === 1) this.form.promoDelivMethod = 1
      else if (num === 2) this.form.promoDelivMethod = 2
      else if (num === 3) this.form.promoDelivMethod = 3
      console.log('Deliv ' + this.form.promoDelivMethod)
    },
    addPromoToStore() {
      console.log('one')
      console.log(this.form)
      this.inputForm2ToStore(this.form)
      console.log('two')
      this.postPromoVuex()
      console.log('vuex')
    }
  }
}
</script>

<style scoped>
div {
  width: 450px;
}

div .name {
  margin-top: 120px;
}
button.button-rounded {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
  border: none;
}
.save-button {
  width: 100%;
  border-radius: 10px;
  border: none;
  height: 40px;
  background-color: #ffcb65;
}
.beverage-size button.button-rounded {
  background-color: #ddd;
}
.food-size button.button-rounded {
  background-color: #ffcb65;
}
.deliv-method .button {
  margin-right: 10px;
  border-radius: 10px;
  border: none;
  width: 120px;
  height: 40px;
  background-color: #ffcb65;
}

#input-discount {
  width: 200px;
}

.disabled {
  opacity: 0.6;
  cursor: not-allowed;
  background-color: #ddd;
}
label {
  color: rgba(106, 64, 41, 1);
  font-weight: 500;
  font-size: 15px;
}

#input-discount,
.input-text,
.beverage-size,
.food-size,
.deliv-method {
  margin-bottom: 30px;
}
</style>
