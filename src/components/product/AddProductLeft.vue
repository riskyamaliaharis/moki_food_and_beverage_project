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
      <b-dropdown id="dropdown-buttons" text="Discount">
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

    <!-- <label>Input Product Size :</label>
    <div id="checkboxes">
      <input
        type="checkbox"
        name="rGroup"
        value="1"
        id="r1"
        checked="checked"
        :size[0]="true"
      />
      <label class="choose-size" for="r1">R</label>
      <input type="checkbox" name="rGroup" value="2" id="r2" :size[1]="true" />
      <label class="choose-size" for="r2">L</label>
      <input type="checkbox" name="rGroup" value="3" id="r3" :size[2]="true" />
      <label class="choose-size" for="r3">XL</label>

      <h1>{{ size }}</h1>
    </div> -->
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
      console.log('left ' + this.form)
      this.changeLeftData(this.form)
    },
    selectDisc(discount) {
      if (discount === 1) this.discountId = 1
      else if (discount === 2) this.discountId = 3
      else if (discount === 3) this.discountId = 4
      else if (discount === 4) this.discountId = 5
      else if (discount === 5) this.discountId = 7
      else if (discount === 6) this.discountId = 9
      else if (discount === 7) this.discountId = 11
      else this.discountId = 13
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

/* .choose-size {
  background-color: rgba(106, 64, 41, 1);
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
} */

#checkboxes input[type='checkbox'] {
  display: none;
}

#checkboxes input[type='checkbox']:checked + .choose-size {
  background-color: #ffcb65;
}
</style>
