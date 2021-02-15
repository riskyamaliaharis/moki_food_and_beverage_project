<template>
  <div>
    <br /><br /><br />
    <label for="input-with-list">Delivery Hour:</label>
    <b-form-timepicker
      list="input-list"
      id="input-with-list"
      v-model="form.delivStartHour"
      @change="leftData"
    ></b-form-timepicker>
    <br />
    <b-form-timepicker
      list="input-list2"
      id="input-with-list2"
      class="input-box"
      v-model="form.delivEndHour"
      @change="leftData"
    ></b-form-timepicker>

    <label for="input-stock">Input Stock:</label>
    <b-form-input
      id="input-stock"
      class="input-box"
      type="number"
      v-model="form.stock"
      @change="leftData"
    ></b-form-input>

    <label for="input-discount">Discount :</label>
    <div>
      <b-dropdown class="btn-brown" id="dropdown-buttons" text="Discount">
        <b-dropdown-item-button @click="selectDisc(1)"
          >0%</b-dropdown-item-button
        >
        <b-dropdown-item-button @click="selectDisc(2)"
          >10%</b-dropdown-item-button
        >
        <b-dropdown-item-button @click="selectDisc(3)"
          >15%</b-dropdown-item-button
        >
        <b-dropdown-item-button @click="selectDisc(4)"
          >20%</b-dropdown-item-button
        >
        <b-dropdown-item-button @click="selectDisc(5)"
          >30%</b-dropdown-item-button
        >
        <b-dropdown-item-button @click="selectDisc(6)"
          >40%</b-dropdown-item-button
        >
        <b-dropdown-item-button @click="selectDisc(7)"
          >50%</b-dropdown-item-button
        >
      </b-dropdown>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
      form: {
        delivStartHour: '',
        delivEndHour: '',
        discountId: '',
        stock: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      delivery_start_hour: 'getProductStart',
      delivery_end_hour: 'getProductEnd',
      discount_id: 'getProductDisc',
      product_stock: 'getProductStock'
    })
  },
  methods: {
    ...mapMutations(['changeLeftData']),
    leftData() {
      this.changeLeftData(this.form)
    },
    selectDisc(discount) {
      if (discount === 1) this.form.discountId = 1
      else if (discount === 2) this.form.discountId = 3
      else if (discount === 3) this.form.discountId = 4
      else if (discount === 4) this.form.discountId = 5
      else if (discount === 5) this.form.discountId = 7
      else if (discount === 6) this.form.discountId = 9
      else if (discount === 7) this.form.discountId = 11
      else this.form.discountId = 13
      this.leftData()
    }
  }
}
</script>
<style scoped>
div {
  width: 350px;
  padding-top: 0;
}
label {
  color: rgba(106, 64, 41, 1);
  font-weight: 500;
  font-size: 15px;
}
.input-box {
  margin-bottom: 30px;
}

#checkboxes input[type='checkbox'] {
  display: none;
}

#checkboxes input[type='checkbox']:checked + .choose-size {
  background-color: #ffcb65;
}
</style>
