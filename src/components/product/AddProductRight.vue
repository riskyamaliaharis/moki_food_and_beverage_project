<template>
  <div>
    <label for="input-name" class="name">Name :</label>
    <b-form-input class="input-text" id="input-name"></b-form-input>

    <label for="input-price">Price :</label>
    <b-form-input class="input-text" id="input-price"></b-form-input>

    <label for="input-desc">Description :</label>
    <b-form-input class="input-text" id="input-desc"></b-form-input>

    <label for="input-cat">Input Category:</label>
    <b-form-input list="input-list" id="input-cat"></b-form-input>
    <b-form-datalist id="input-list" :options="options"></b-form-datalist>

    <label>Input Product Size :</label>
    <br />

    <b-row>
      <b-col class="beverage-size">
        <button class="button button-rounded">
          R
        </button>
        <button class="button button-rounded">L</button>
        <button class="button button-rounded">XL</button>
      </b-col>
      <b-col class="food-size">
        <button class="button button-rounded">150</button>
        <button class="button button-rounded">200</button>
        <button class="button button-rounded">250</button>
      </b-col>
    </b-row>

    <label>Input Delivery Methods :</label>
    <b-row>
      <b-col class="deliv-method">
        <button class="button">Home Delivery</button>
        <button class="button">Dine In</button>
        <button class="button disabled">Take Away</button>
      </b-col>
    </b-row>

    <button class="save-button">Save</button>
    <br /><br />
    <button class="cancel-button">Cancel</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ['Coffee', 'Non-Coffee', 'Food', 'Add On']
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
