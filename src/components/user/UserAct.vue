<template>
  <div class="left-side centered">
    <div class="left-profile">
      <img src="../../assets/img/unnamed.png" alt="" />

      <h6><b>Zulaikha</b></h6>
      <h6>Zulaikha@gmail.com</h6>
      <input class="btn update-photo b" type="button" value="Update Photo" />
      <br />
      <input class="btn remove-photo c" type="button" value="Remove Photo" />
      <br /><br />
      <input class="btn change-pass d" type="button" value="Edit Password" />
      <br />
      <h6>Do you want to save the change?</h6>
      <input class="btn save f" type="button" value="Save Change" />
      <br /><br />
      <input class="btn cancel g" type="button" value="Cancel" />
      <br /><br />
      <input class="btn logout h" type="button" value="Logout" />
    </div>
  </div>
</template>

<style scoped>
.centered {
  text-align: center;
}
.left-side img {
  width: 170px;
  height: 170px;
}

.left-profile {
  margin-top: 35px;
  margin-bottom: 50px;
  padding-bottom: 20px;
  background-color: white;
  border-radius: 10px;
}
.btn.b,
.btn.c,
.btn.d {
  margin-bottom: 15px;
}

.b {
  background-color: rgba(255, 186, 51, 1);
}

.c {
  background-color: #6a4029;
  color: white;
}

.c:hover,
.f:hover {
  background-color: rgba(255, 186, 51, 1);
  color: #6a4029;
}

.d,
.h {
  border-color: #6a4029;
  color: #6a4029;
  border-radius: 10px;
}

.f {
  background-color: #6a4029;
  border-radius: 10px;
  color: white;
  margin: 0;
}

.g {
  background-color: rgba(255, 186, 51, 1);
  border-radius: 10px;
  color: #6a4029;
}

.d,
.f,
.g,
.h {
  width: 140px;
}
</style>
