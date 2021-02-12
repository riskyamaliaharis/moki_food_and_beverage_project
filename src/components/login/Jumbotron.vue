<template>
  <div>
    <div class="jumbotron">
      <img
        src="../../assets/img/product/robert-bye-95vx5QVl9x4-unsplash 2.png"
        alt=""
      />
    </div>

    <div class="info">
      <h3>Get your member card now!</h3>
    </div>
  </div>
</template>

<style scoped>
.jumbotron {
  width: 100%;
  margin: 0;
  background-color: white;
  object-fit: cover;
  height: 600px;
}
.jumbotron img {
  position: relative;
  object-fit: cover;
  left: -150px;
  top: -100px;
  width: 540px;
  height: 700px;
}
.info {
  width: 60%;
  height: 100px;
  position: absolute;
  right: 30px;
  bottom: -10px;
  background-color: white;
  border-radius: 6px;
  padding: 10px;
}

@media only screen and (max-width: 1124px) {
  .jumbotron img {
    width: 450px;
  }
}
</style>
