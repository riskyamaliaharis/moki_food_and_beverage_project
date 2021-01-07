<template>
  <div>
    <br /><br /><br />
    <label for="input-with-list">Delivery Hour:</label>
    <b-form-timepicker
      list="input-list"
      id="input-with-list"
    ></b-form-timepicker>
    <br />
    <b-form-timepicker
      list="input-list2"
      id="input-with-list2"
      class="input-box"
    ></b-form-timepicker>

    <label for="input-stock">Input Stock:</label>
    <b-form-input id="input-stock" class="input-box"></b-form-input>
  </div>
</template>

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
</style>
