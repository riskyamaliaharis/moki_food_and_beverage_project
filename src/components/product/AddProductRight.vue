<template>
  <div>
    <label for="input-name" class="name">Name :</label>
    <b-form-input
      class="input-text"
      id="input-name"
      v-model="form.name"
      required
    ></b-form-input>

    <label for="input-price">Price :</label>
    <b-form-input
      class="input-text"
      id="input-price"
      v-model="form.price"
      type="number"
      required
    ></b-form-input>

    <label for="input-desc">Description :</label>
    <b-form-input
      class="input-text"
      id="input-desc"
      v-model="form.description"
      required
    ></b-form-input>

    <label for="input-cat">Input Category:</label>
    <div>
      <b-dropdown id="dropdown-buttons" text="Category">
        <b-dropdown-item-button @click="selectCategory1"
          >Coffee</b-dropdown-item-button
        >
        <b-dropdown-item-button @click="selectCategory2"
          >Non Coffee</b-dropdown-item-button
        >
        <b-dropdown-item-button @click="selectCategory3"
          >Food</b-dropdown-item-button
        >
        <b-dropdown-item-button @click="selectCategory4"
          >Add On</b-dropdown-item-button
        >
      </b-dropdown>
    </div>
    <br />

    <div class="product-size">
      <label>Input Product Size :</label>
      <b-row>
        <b-col cols="1">
          <b-form-checkbox
            button-variant="warning"
            v-model="size[0]"
            name="check-button"
            button
          >
            <b>R</b>
          </b-form-checkbox>
        </b-col>
        <b-col cols="1">
          <b-form-checkbox
            button-variant="warning"
            v-model="size[1]"
            name="check-button"
            button
            pill
          >
            <b>L</b>
          </b-form-checkbox>
        </b-col>
        <b-col cols="1">
          <b-form-checkbox
            button-variant="warning"
            v-model="size[2]"
            name="check-button"
            button
            pill
          >
            <b>XL</b>
          </b-form-checkbox>
        </b-col>

        <b-col cols="1"></b-col>

        <b-col cols="2">
          <b-form-checkbox v-model="size[3]" name="check-button" button>
            <b>250gr</b>
          </b-form-checkbox>
        </b-col>
        <b-col cols="2">
          <b-form-checkbox v-model="size[4]" name="check-button" button>
            <b>300gr</b>
          </b-form-checkbox>
        </b-col>

        <b-col cols="2">
          <b-form-checkbox v-model="size[5]" name="check-button" button>
            <b>500gr</b>
          </b-form-checkbox>
        </b-col>
      </b-row>
      <div id="food"></div>
    </div>
    <br />

    <div class="deliv-method">
      <label class="label-title"> Input Delivery Method</label>
      <b-row>
        <b-col cols="3">
          <b-form-checkbox v-model="checked[0]" name="check-button" button>
            <b>Dine In</b>
          </b-form-checkbox>
        </b-col>
        <b-col cols="4">
          <b-form-checkbox v-model="checked[1]" name="check-button" button>
            <b>Door Delivery</b>
          </b-form-checkbox>
        </b-col>
        <b-col cols="4">
          <b-form-checkbox v-model="checked[2]" name="check-button" button>
            <b>Pick Up</b>
          </b-form-checkbox>
        </b-col>
      </b-row>
    </div>

    <button class="save-button" @click="rightData">Save</button>
    <br /><br />
    <button class="cancel-button">Cancel</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      category_id: 'getCategoryId',
      product_name: 'getProductName',
      product_price: 'getProductPrice',
      product_description: 'getProductDesc',
      delivery_method_id: 'getProductDeliv',
      size_id: 'getProductSizeId',
      delivery_start_hour: 'getProductStart',
      delivery_end_hour: 'getProductEnd',
      discount_id: 'getProductDisc',
      image_src: 'getProductImg'
    })
  },

  data() {
    return {
      form: {
        name: '',
        price: '',
        description: '',
        category: '',
        delivMethod: '',
        sizeId: ''
      },
      checked: [false, false, false],
      size: [false, false, false, false, false, false]
    }
  },
  methods: {
    ...mapMutations(['changeRightData']),
    ...mapActions(['postProductsVuex']),
    selectCategory1() {
      this.form.category = 1
      console.log(this.form.category)
    },
    selectCategory2() {
      this.form.category = 2
      console.log(this.form.category)
    },
    selectCategory3() {
      this.form.category = 3
      console.log(this.form.category)
    },
    selectCategory4() {
      this.form.category = 4
      console.log(this.form.category)
    },
    rightData() {
      console.log('satu')
      this.chooseSizeAndDelivMethod()
      console.log('dua')
      console.log(this.form)
      console.log('tiga')
      this.changeRightData(this.form)
      console.log('empat')
      this.postProductsVuex()
      console.log('succeess')
    },
    chooseSizeAndDelivMethod() {
      console.log(this.size)
      if (this.size[3] == true && this.size[4] == true && this.size[5] == true)
        this.form.sizeId = 14
      else if (
        this.size[0] == true &&
        this.size[1] == true &&
        this.size[2] == true
      )
        this.form.sizeId = 13
      else if (this.size[4] == true && this.size[5] == true)
        this.form.sizeId = 12
      else if (this.size[3] == true && this.size[5] == true)
        this.form.sizeId = 11
      else if (this.size[3] == true && this.size[4] == true)
        this.form.sizeId = 10
      else if (this.size[5] == true) this.form.sizeId = 9
      else if (this.size[4] == true) this.form.sizeId = 8
      else if (this.size[3] == true) this.form.sizeId = 7
      else if (this.size[1] == true && this.size[2] == true)
        this.form.sizeId = 6
      else if (this.size[0] == true && this.size[2] == true)
        this.form.sizeId = 5
      else if (this.size[0] == true && this.size[1] == true)
        this.form.sizeId = 4
      else if (this.size[2] == true) this.form.sizeId = 3
      else if (this.size[1] == true) this.form.sizeId = 2
      else if (this.size[0] == true) this.form.sizeId = 1
      else console.log('choice is not available')
      console.log('size ' + this.form.sizeId)

      if (
        this.checked[0] == true &&
        this.checked[1] == true &&
        this.checked[2] == true
      )
        this.form.delivMethod = 7
      else if (this.checked[1] == true && this.checked[2] == true)
        this.form.delivMethod = 6
      else if (this.checked[0] == true && this.checked[2] == true)
        this.form.delivMethod = 5
      else if (this.checked[0] == true && this.checked[1] == true)
        this.form.delivMethod = 4
      else if (this.checked[2] == true) this.form.delivMethod = 3
      else if (this.checked[1] == true) this.form.delivMethod = 2
      else if (this.checked[0] == true) this.form.delivMethod = 1
      else console.log('choice is not available')
      console.log(this.form.delivMethod)
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
.save-button,
.cancel-button {
  width: 100%;
  border-radius: 10px;
  border: none;
  height: 40px;
}
.save-button {
  margin-top: 80px;
  color: white;
  background-color: rgba(106, 64, 41, 1);
}
.cancel-button {
  background-color: #ddd;
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

#input-cat,
.input-text,
.beverage-size,
.food-size,
.deliv-method {
  margin-bottom: 30px;
}
</style>
