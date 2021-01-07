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

    <label>Input Product Size :</label>
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: [false, false, false]
    }
  },
  methods: {
    val(i) {
      if (this.checked) {
        this.size[i] = true
      } else this.size[i] = true
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
