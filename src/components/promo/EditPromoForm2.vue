<template>
  <div>
    <label for="input-name" class="name">Name :</label>
    <b-form-input
      class="input-text"
      id="input-name"
      v-model="data.product_name"
      readonly="readonly"
    ></b-form-input>

    <label for="input-pice"></label>
    <b-form-input
      class="input-text"
      id="input-price"
      v-model="data.product_price"
      readonly="readonly"
    ></b-form-input>

    <label for="input-desc">Description :</label>
    <b-form-input
      class="input-text"
      id="input-desc"
      v-model="data.product_description"
    ></b-form-input>

    <label>Input Product Size :</label>
    <br />
    <div class="product-size">
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
    </div>

    <label>Input Delivery Methods :</label>
    <div class="product-delivery-method">
      <b-row>
        <b-col class="deliv-method">
          <button class="button method" @click="generateThisDelivMethod(1)">
            Home Delivery
          </button>
          <button class="button method" @click="generateThisDelivMethod(2)">
            Dine In
          </button>
          <button class="button method" @click="generateThisDelivMethod(3)">
            Take Away
          </button>
        </b-col>
      </b-row>
    </div>

    <label for="input-discount">Discount</label>
    <br />
    <b-dropdown text="Discount" variant="outline-warning">
      <b-dropdown-item @click="addDiscountPromo(1)">15%</b-dropdown-item>
      <b-dropdown-item @click="addDiscountPromo(2)">20%</b-dropdown-item>
      <b-dropdown-item @click="addDiscountPromo(3)">30%</b-dropdown-item>
      <b-dropdown-item @click="addDiscountPromo(4)">40%</b-dropdown-item>
      <b-dropdown-item @click="addDiscountPromo(5)">50%</b-dropdown-item>
      <b-dropdown-item @click="addDiscountPromo(6)">70%</b-dropdown-item>
    </b-dropdown>

    <button class="save-button mt-4" @click="editPromo">Save</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { alert } from '../../mixins/alert'
export default {
  mixins: [alert],
  data() {
    return {
      name: 'AddPromoForm2'
    }
  },

  computed: {
    ...mapGetters({ data: 'getproductPromo' })
  },
  methods: {
    ...mapActions(['updatePromo']),
    addDiscountPromo(num) {
      if (num === 1) this.data.coupon_discount = 0.15
      else if (num === 2) this.data.coupon_discount = 0.2
      else if (num === 3) this.data.coupon_discount = 0.3
      else if (num === 4) this.data.coupon_discount = 0.4
      else if (num === 5) this.data.coupon_discount = 0.5
      else this.data.coupon_discount = 0.7
    },
    generateThisSize(num) {
      if (num === 1) this.data.promo_size = 1
      else if (num === 2) this.data.promo_size = 1.35
      else if (num === 3) this.data.promo_size = 1.7
      else if (num === 4) this.data.promo_size = 1
      else if (num === 5) this.data.promo_size = 1.4
      else if (num === 6) this.data.promo_size = 1.72
      console.log('Size ' + this.data.promo_size)
    },
    generateThisDelivMethod(num) {
      if (num === 1) this.data.promo_deliv_method = 1
      else if (num === 2) this.data.promo_deliv_method = 2
      else if (num === 3) this.data.promo_deliv_method = 3
      console.log('Deliv ' + this.data.promo_deliv_method)
    },
    editPromo() {
      this.updatePromo({ id: this.data.promo_id, data: this.data })
        .then(result => {
          this.successAlert(result.data.msg)
        })
        .catch(error => {
          this.errorAlert(error.data.msg)
        })
      console.log('vuex')
    }
  }
}
</script>

<style scoped>
.product-size,
.product-delivery-method {
  margin-left: 16px;
}
.method {
  margin-bottom: 5px;
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
  color: black;
  background-color: #ffcb65;
}
.save-button:hover {
  color: white;
  background-color: #6a4029;
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

div.food-size.col {
  background: none;
}

#input-discount,
.input-text,
.beverage-size,
.food-size,
.deliv-method {
  margin-bottom: 30px;
}
@media only screen and (max-width: 576px) {
  div .name {
    margin-top: 20px;
  }
}
</style>
