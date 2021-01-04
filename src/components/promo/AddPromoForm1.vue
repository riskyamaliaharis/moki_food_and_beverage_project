<template>
  <div>
    <label for="input-with-list">Expire Date</label>
    <b-form-datepicker
      list="input-list"
      id="input-with-list"
    ></b-form-datepicker>

    <b-form-datepicker
      list="input-list2"
      id="input-with-list2"
      class="input-box"
    ></b-form-datepicker>

    <label for="input-promo-code">Input Promo Code :</label>
    <b-form-input id="input-promo-code" class="input-box"></b-form-input>
  </div>
</template>

<style scoped>
div {
  width: 300px;
}
label {
  color: rgba(106, 64, 41, 1);
  font-weight: 500;
  font-size: 15px;
}
.input-box {
  margin-bottom: 30px;
}
</style>
