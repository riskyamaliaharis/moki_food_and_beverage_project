<template>
  <div>
    <br /><br /><br />
    <label for="input-with-list">Delivery Hour:</label>
    <b-form-timepicker
      list="input-list"
      id="input-with-list"
      v-model="form.delivery_start_hour"
    ></b-form-timepicker>
    <br />
    <b-form-timepicker
      list="input-list2"
      id="input-with-list2"
      class="input-box"
      v-model="form.delivery_end_hour"
    ></b-form-timepicker>

    <label for="input-stock">Input Stock:</label>
    <b-form-input
      id="input-stock"
      class="input-box"
      v-model="form.product_stock"
    ></b-form-input>

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

    <!--  -->
    <label class="label-title"> Input Product Size</label>
    <div class="product-size">
      <!-- (Checked: {{ checked3 }}) -->
      <b-form-checkbox
        button-variant="warning"
        v-model="size[0]"
        name="check-button"
        button
        pill
      >
        <b>R</b>
      </b-form-checkbox>

      <b-form-checkbox
        button-variant="warning"
        v-model="size[1]"
        name="check-button"
        button
        pill
      >
        <b>L</b>
      </b-form-checkbox>
      <b-form-checkbox
        button-variant="warning"
        v-model="size[2]"
        name="check-button"
        button
        pill
      >
        <b>XL</b>
      </b-form-checkbox>
      <b-form-checkbox
        v-model="size[3]"
        class="food-size"
        name="check-button"
        button
      >
        <b>250gr</b>
      </b-form-checkbox>
      <b-form-checkbox
        v-model="size[4]"
        class="food-size"
        name="check-button"
        button
      >
        <b>300gr</b>
      </b-form-checkbox>
      <b-form-checkbox
        v-model="size[5]"
        class="food-size"
        name="check-button"
        button
      >
        <b>500gr</b>
      </b-form-checkbox>
    </div>
    <br />
    <label class="label-title"> Input Delivery Method</label>

    <div class="deliv-method">
      <!-- (Checked: {{ checked3 }}) -->

      <b-form-checkbox
        v-model="checked[0]"
        class="delivery"
        name="check-button"
        button
      >
        <b>(Dine In)</b>
      </b-form-checkbox>
      <b-form-checkbox
        v-model="checked[1]"
        class="delivery"
        name="check-button"
        button
      >
        <b>Door Delivery</b>
      </b-form-checkbox>
      <b-form-checkbox
        v-model="checked[2]"
        class="delivery"
        name="check-button"
        button
      >
        <b>Pick Up</b>
      </b-form-checkbox>
    </div>

    <!--  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      delivery_method_id: '',
      size_id: '',
      delivery_start_hour: '',
      delivery_end_hour: '',
      discount_id: 1,
      checked: [false, false, false],
      size: [false, false, false, false, false, false]
    }
  },
  methods: {
    chooseSizeAndDelivMethod() {
      console.log(this.size)
      if (this.size[3] == true && this.size[4] == true && this.size[5] == true)
        this.form.size_id = 14
      else if (
        this.size[0] == true &&
        this.size[1] == true &&
        this.size[2] == true
      )
        this.form.size_id = 13
      else if (this.size[4] == true && this.size[5] == true)
        this.form.size_id = 12
      else if (this.size[3] == true && this.size[5] == true)
        this.form.size_id = 11
      else if (this.size[3] == true && this.size[4] == true)
        this.form.size_id = 10
      else if (this.size[5] == true) this.form.size_id = 9
      else if (this.size[4] == true) this.form.size_id = 8
      else if (this.size[3] == true) this.form.size_id = 7
      else if (this.size[1] == true && this.size[2] == true)
        this.form.size_id = 6
      else if (this.size[0] == true && this.size[2] == true)
        this.form.size_id = 5
      else if (this.size[0] == true && this.size[1] == true)
        this.form.size_id = 4
      else if (this.size[2] == true) this.form.size_id = 3
      else if (this.size[1] == true) this.form.size_id = 2
      else if (this.size[0] == true) this.form.size_id = 1
      else console.log('choice is not available')
      console.log('size ' + this.form.size_id)
      if (
        this.checked[0] == true &&
        this.checked[1] == true &&
        this.checked[2] == true
      )
        this.delivery_method_id = 7
      else if (this.checked[1] == true && this.checked[2] == true)
        this.form.delivery_method_id = 6
      else if (this.checked[0] == true && this.checked[2] == true)
        this.form.delivery_method_id = 5
      else if (this.checked[0] == true && this.checked[1] == true)
        this.delivery_method_id = 4
      else if (this.checked[2] == true) this.form.delivery_method_id = 3
      else if (this.checked[1] == true) this.form.delivery_method_id = 2
      else if (this.checked[0] == true) this.form.delivery_method_id = 1
      else console.log('choice is not available')
      console.log(this.form.delivery_method_id)
    }
  }
}
</script>
<style scoped>
div {
  width: 300px;
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

.choose-size {
  background-color: rgba(106, 64, 41, 1);
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
}

#checkboxes input[type='checkbox'] {
  display: none;
}

#checkboxes input[type='checkbox']:checked + .choose-size {
  background-color: #ffcb65;
}
</style>
